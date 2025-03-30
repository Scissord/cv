<script setup>
import { ref, computed, watch } from 'vue';
import { useUserStore, useCartStore, useNotificationStore } from '@store';

const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
});

const user = useUserStore();
const cart = useCartStore();
const notification = useNotificationStore();

const isExpanded = ref(false);
const isImageLoaded = ref(false);
const isAdded = computed(() => cart.data.products.some((p) => p.id === props.product.id));
const productQuantity = ref(cart.data.products.find((p) => p.id === props.product.id)?.quantity ?? 0);

const toggleDescription = () => {
  isExpanded.value = !isExpanded.value;
};

const handleImageLoad = () => {
  isImageLoaded.value = true;
};

const handleAddProduct = (product) => {
  productQuantity.value += 1;
  cart.addProduct(product, productQuantity.value);
};

const handleDeleteProduct = (product) => {
  productQuantity.value -= 1;
  cart.deleteProduct(product);
};

const handleChangeProductQuantity = (product, quantity) => {
  cart.changeQuantity(product, quantity);
};
</script>

<template>
  <div class="bg-white rounded-lg shadow-lg border-slate-200 border max-h-[600px]">
    <div
      :class="['relative w-full h-[280px] overflow-hidden  bg-gray-200 flex items-center justify-center', !isImageLoaded && 'url(https://via.placeholder.com/200/cccccc/cccccc)']"
    >
      <img
        :src="product.thumbnail || 'https://via.placeholder.com/200/cccccc/cccccc'"
        alt="Product image"
        :class="[
          'object-cover w-3/4 h-3/4 transition-opacity duration-300 ease',
          isImageLoaded ? 'opacity-100' : 'opacity-0'
        ]"
        loading="lazy"
        @load="handleImageLoad"
      />
    </div>

    <div class="flex flex-col items-start gap-3 p-6">
      <h2 class="text-xl font-semibold line-clamp-1">
        {{ product.id }}. {{ product.title }}
      </h2>
      <p v-if="!isExpanded" class="line-clamp-3 text-justify">
        {{ product.description }}
      </p>
      <p v-if="isExpanded" class="text-justify">
        {{ product.description }}
      </p>
      <button @click="toggleDescription" class="text-blue-500">
        {{ isExpanded ? 'Read less' : 'Read more' }}
      </button>
      <div class="w-full flex items-center justify-between">
        <span class="text-lg font-bold text-green-500">
        {{ product.price }}$
        </span>
        <Button
          v-if="!isAdded"
          text="Add to Cart"
          :icon="['fas', 'cart-shopping']"
          @click="() => handleAddProduct(product)"
        />
        <Counter
          v-else
          v-model="productQuantity"
          @update:modelValue="(quantity) => handleChangeProductQuantity(product, quantity)"
          @increment="() => handleAddProduct(product)"
          @decrement="() => handleDeleteProduct(product)"
        />
      </div>
    </div>
  </div>
</template>
