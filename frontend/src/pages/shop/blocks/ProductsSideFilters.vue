<script setup>
import ProductsCategories from './ProductsSideFilters/ProductsCategories.vue';
import ProductsBrands from './ProductsSideFilters/ProductsBrands.vue';
import ProductsTags from './ProductsSideFilters/ProductsTags.vue';

const props = defineProps({
  categories: Array,
  brands: Array,
  tags: Array,
});
</script>

<template>
  <div class="w-1/5 flex flex-col text-sm">
    <ProductsCategories :categories="categories"/>
    <ProductsBrands :brands="brands"/>
    <ProductsTags :tags="tags"/>
  </div>
</template>
