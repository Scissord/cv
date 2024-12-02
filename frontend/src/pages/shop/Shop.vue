<script setup>
import { ref, reactive, onMounted, watch } from 'vue';
// import { useRouter } from 'vue-router';
import { useUserStore } from '@store';
import { useProducts } from '@hooks';
import ProductsFilters from './blocks/ProductsFilters.vue';
import ProductsGrid from './blocks/ProductsGrid.vue';
import LoginForm from './blocks/LoginForm.vue';

// const router = useRouter();

const userStore = useUserStore();
const { fetchProducts } = useProducts();

const limit = ref(16);
const page = ref(1);
const search = ref("");

const products = reactive([]);
const total = ref(null);

const isProductsGetLoading = ref(false);

onMounted(async () => {
  isProductsGetLoading.value = true;
  const data = await fetchProducts(limit.value, page.value, search.value);
  products.splice(0, products.length, ...data.products);
  total.value = data.total;
  isProductsGetLoading.value = false;
});
</script>

<template>
  <div v-if="userStore.isAuthenticated" class="bg-white min-h-screen flex flex-col">
    <div class="container mx-auto py-6 flex flex-col gap-6">
      <ProductsFilters
        :search="search"
      />
      <!-- make loader in center -->
      <Loader v-if="isProductsGetLoading"/>
      <ProductsGrid
        v-else
        :products="products"
      />
    </div>
  </div>

  <LoginForm v-else />
</template>

<style scoped>
</style>
