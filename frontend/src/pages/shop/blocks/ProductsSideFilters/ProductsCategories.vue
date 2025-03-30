<script setup>
import { ref, computed } from 'vue';
import ProductsCategoryItem from './ProductsCategoryItem.vue';

const props = defineProps({
  categories: Array
});

const isCategoriesOpen = ref(true);
const showAllCategories = ref(false);

const displayedCategories = computed(() => {
  return showAllCategories.value ? props.categories : props.categories.slice(0, 6);
});
</script>

<template>
  <div
    class="flex items-center justify-between bg-white px-5 py-3 cursor-pointer border-b select-none"
    @click="isCategoriesOpen = !isCategoriesOpen"
  >
    <h1 class="font-bold">Categories</h1>
    <!-- chevron -->
  </div>
  <div
    v-if="isCategoriesOpen"
    class="flex flex-col gap-2 bg-white px-5 py-3 border-b"
  >
    <ProductsCategoryItem
      v-for="category in displayedCategories"
      :key="category.id"
      :category="category"
    />
    <p
      v-if="categories.length > 6"
      class="text-blue-500 cursor-pointer"
      @click="showAllCategories = !showAllCategories"
    >
      {{ showAllCategories ? 'Hide' : 'Show all' }}
    </p>
  </div>
</template>