<script setup>
import { ref } from 'vue';

const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
});

const isExpanded = ref(false);

const toggleDescription = () => {
  isExpanded.value = !isExpanded.value;
};

const emit = defineEmits(['click']);
const handleClick = () => {
  emit('click', props.product.title);
};

console.log(props.product);
</script>

<template>
  <div class="bg-white rounded-lg shadow-lg p-6 flex flex-col gap-3 items-center border-slate-200 border">
    <img
      :src="product.thumbnail || 'https://via.placeholder.com/150'"
      alt="Product image"
      class="object-cover bg-cover"
    />
    <h2 class="text-xl font-semibold line-clamp-1">{{ product.id }}. {{ product.title }}</h2>
    <p v-if="!isExpanded" class="line-clamp-3 text-justify">
      {{ product.description }}
    </p>
    <p v-if="isExpanded" class="text-justify">
      {{ product.description }}
    </p>
    <button @click="toggleDescription" class="text-blue-500">
      {{ isExpanded ? 'Read less' : 'Read more' }}
    </button>
    <span class="text-lg font-bold text-green-500">
      {{ product.price }}
    </span>
    <Button text="Add to Cart" @click="handleClick" />
  </div>
</template>

<style scoped>
</style>