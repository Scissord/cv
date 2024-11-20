<script setup>
import ProductCard from './ProductCard';

defineProps({
  products: Array,
})

const handleProductClick = (title) => {
  alert(`Кнопка нажата! ${title}`);
};
</script>

<template>
  <div class="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
    <ProductCard
      v-for="product in products"
      :key="product.id"
      :product="product"
      @click="handleProductClick"
    />
  </div>
</template>
