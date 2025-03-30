<script setup>
import { ref } from 'vue';
import { useCartStore } from '@store';

defineProps({
  product: Object
});

const cart = useCartStore();

const isImageLoaded = ref(false);

const handleImageLoad = () => {
  isImageLoaded.value = true;
};

const handleAddProduct = (product) => {
  cart.addProduct(product, product.quantity);
};

const handleDeleteProduct = (product) => {
  cart.deleteProduct(product);
};

const handleChangeProductQuantity = (product, quantity) => {
  cart.changeQuantity(product, quantity);
};
</script>

<template>
  <div class="flex items-center justify-between gap-6">
    <div
      :class="['relative max-w-20 max-h-20 overflow-hidden rounded-lg bg-gray-200 bg-cover bg-center', !isImageLoaded && 'url(https://via.placeholder.com/200/cccccc/cccccc)']"
    >
      <img
        :src="product.thumbnail || 'https://via.placeholder.com/100/cccccc/cccccc'"
        alt="Product image"
        :class="[
          'object-cover w-full h-full transition-opacity duration-300 ease',
          isImageLoaded ? 'opacity-100' : 'opacity-0'
        ]"
        loading="lazy"
        @load="handleImageLoad"
      />
    </div>

    <div class="flex flex-col h-full w-full">
      <p class="font-semibold text-md">{{ product.title }}</p>
      <p class="text-green-500 text-sm">
        {{ (product.price * product.quantity).toFixed(2) }}$
      </p>
    </div>

    <Counter
      v-model="product.quantity"
      @update:modelValue="(quantity) => handleChangeProductQuantity(product, quantity)"
      @increment="() => handleAddProduct(product)"
      @decrement="() => handleDeleteProduct(product)"
    />
  </div>

</template>