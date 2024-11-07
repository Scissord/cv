<script setup>
import { Loader, Button, Select } from '@components';
import { useAuth } from '@hooks';
import { useUser, useProducts } from '@store';
import { onMounted } from 'vue';
import ProductCard from './blocks/ProductCard';

const user = useUser();

const { login, logout } = useAuth();

const {
  products, getProducts,
  isProductsGetLoading
} = useProducts();

const handleProductClick = (title) => {
  alert(`Кнопка нажата! ${title}`);
};

onMounted(() => {
  getProducts();
});
</script>

<template>
  <div v-if="user.isAuthenticated" class="p-8">
    <Loader v-if="isProductsGetLoading"/>
    <div v-else class="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :product="product"
        @click="handleProductClick"
      />
    </div>
  </div>
  <div class="bg-white" v-else>
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
