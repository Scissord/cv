<script setup>
import { onMounted } from 'vue';
import { useProducts } from '@hooks';
import { sortOptions } from '@constants';
import ProductsTopFilters from './blocks/ProductsTopFilters.vue';
import ProductsSideFilters from './blocks/ProductsSideFilters.vue'
import ProductsGrid from './blocks/ProductsGrid.vue';

const {
  state,
  handlePageClick,
  handleChangeSort,
  handleChangeSearch,
  handleGetFilters,
} = useProducts();

onMounted(async () => {
  await handleGetFilters();
});
</script>

<template>
  <div class="bg-[#F6F6F6] min-h-screen flex flex-col">
    <div class="container mx-auto py-6 flex flex-col gap-6 min-h-screen">
      <div class="w-full flex items-center justify-between">
        <Search
          :modelValue="state.search"
          @update:modelValue="handleChangeSearch"
          class="w-1/5"
        />

        <div class="flex items-center gap-6">
          <Paginate
            :page="state.page"
            :lastPage="state.lastPage"
            :pages="state.pages"
            :handlePageClick="handlePageClick"
          />
          <Select
            :options="sortOptions"
            :modelValue="state.sort"
            @update:modelValue="handleChangeSort"
            class="w-[200px]"
          />
        </div>
      </div>

      <div v-if="state.isProductsGetLoading" class="flex items-center justify-center h-screen">
        <Loader />
      </div>

      <div
        v-else
        class="flex items-start gap-6"
      >
        <ProductsSideFilters
          :brands="state.brands"
          :categories="state.categories"
          :tags="state.tags"
        />
        <ProductsGrid
          :products="state.products"
        />
      </div>
    </div>
  </div>
</template>
