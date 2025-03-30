<script setup>
import ProductCard from './ProductsGrid/ProductCard.vue';
defineProps({
  products: Array,
})
</script>

<template>
  <div class="w-4/5 grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 px-6 sm:px-0">
    <ProductCard
      v-for="product in products"
      :key="product.id"
      :product="product"
    />
  </div>
</template>
