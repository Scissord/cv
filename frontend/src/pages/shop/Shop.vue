<script setup>
import { Loader, Button, Select } from '@components';
import { useAuth } from '@hooks';
import { useUserStore, useProductsStore } from '@store';
import { onMounted } from 'vue';
import ProductCard from './blocks/ProductCard';

const userStore = useUserStore();
const productsStore = useProductsStore();

const { login, logout } = useAuth();

const handleProductClick = (title) => {
  alert(`Кнопка нажата! ${title}`);
};

onMounted(() => {
  productsStore.getProducts();
});
</script>

<template>
  <div v-if="userStore.isAuthenticated" class="p-8">
    <Loader v-if="productsStore.isProductsGetLoading"/>
    <div v-else class="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      <ProductCard
        v-for="product in productsStore.products"
        :key="product.id"
        :product="product"
        @click="handleProductClick"
      />
    </div>
  </div>
  <div v-else class="bg-white">
    <Select/>
    <Button text="Login" @click="login" />
  </div>
</template>

<style scoped>
:root {
  --vs-controls-color: #664cc3;
  --vs-border-color: #664cc3;

  --vs-dropdown-bg: #282c34;
  --vs-dropdown-color: #cc99cd;
  --vs-dropdown-option-color: #cc99cd;

  --vs-selected-bg: #664cc3;
  --vs-selected-color: #eeeeee;

  --vs-search-input-color: #eeeeee;

  --vs-dropdown-option--active-bg: #664cc3;
  --vs-dropdown-option--active-color: #eeeeee;
}
</style>
