<script setup>
import { Button } from '@components';

const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
});

const emit = defineEmits(['click']);
const handleClick = () => {
  emit('click', props.product.title);
};

</script>

<template>
  <div class="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center">
    <img
      :src="product.link || 'https://via.placeholder.com/150'"
      alt="Product image"
      class="w-full h-40 object-cover bg-cover rounded-md mb-4"
    />
    <h2 class="text-xl font-semibold mb-2">{{ product.title }}</h2>
    <p class="text-gray-600 mb-4">{{ product.description }}</p>
    <span class="text-lg font-bold text-green-500 mb-4">
      {{ product.price }}
    </span>
    <Button text="Add to Cart" @click="handleClick" />
  </div>
</template>

<style scoped>
</style>