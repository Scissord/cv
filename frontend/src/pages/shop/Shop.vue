<script setup>
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useUserStore, useProductsStore } from '@store';
import ProductsFilters from './blocks/ProductsFilters.vue';
import ProductsGrid from './blocks/ProductsGrid.vue';

const router = useRouter();

const userStore = useUserStore();
const productsStore = useProductsStore();

onMounted(() => {
  productsStore.getProducts();
});
</script>

<template>
  <div v-if="userStore.isAuthenticated">
    <Loader v-if="productsStore.isProductsGetLoading"/>

    <div v-else class="container mx-auto py-6 flex flex-col gap-3">
      <ProductsFilters />
      <ProductsGrid
        :products="productsStore.products"
      />
    </div>

  </div>
  <div v-else class="bg-white min-h-[50vh] flex flex-col items-center justify-center gap-3">
    <p class="font-semibold text-2xl">Please login to see Shop</p>
    <Button text="Login" @click="router.push('/auth')" />
  </div>
</template>

<style scoped>
</style>
