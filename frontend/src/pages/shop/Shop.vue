<script setup>
import { ref, reactive, onMounted, watch } from 'vue';
// import { useRouter } from 'vue-router';
import { useUserStore } from '@store';
import { useProducts } from '@hooks';
import ProductsFilters from './blocks/ProductsFilters.vue';
import ProductsGrid from './blocks/ProductsGrid.vue';
import LoginForm from './blocks/LoginForm.vue';

const type = ref({ value: 2, label: "poxuy" },);
const types = [
  { value: 0, label: "da" },
  { value: 1, label: "net" },
  { value: 2, label: "poxuy" },
];

watch(type, (newVal, oldVal) => {
  console.log("Type changed:", oldVal, "->", newVal);
});

// const router = useRouter();

const userStore = useUserStore();
const { fetchProducts } = useProducts();

const limit = ref(16);
const page = ref(1);
const search = ref("");

const products = reactive([]);
const total = ref(null);

const isProductsGetLoading = ref(false);

const handleGetProducts = async () => {
  isProductsGetLoading.value = true;
  const data = await fetchProducts(limit.value, page.value, search.value);
  products.splice(0, products.length, ...data.products);
  total.value = data.total;
  isProductsGetLoading.value = false;
};

onMounted(async () => {
  await handleGetProducts();
});

watch([limit, page, search], async () => {
  console.log('запрос изменился')
  await handleGetProducts();
});
</script>

<template>
  <div v-if="userStore.isAuthenticated" class="bg-white min-h-screen flex flex-col">
    <div class="container mx-auto py-6 flex flex-col gap-6">
      <!-- should be in components -->

      <div class="w-full flex items-center justify-between">
        <vSelect
          v-model="type"
          :options="types"
          :reduce="(option) => option"
          class="w-fit min-w-[150px]"
        />
        <Search
          :modelValue="search"
          @update:modelValue="search = $event"
          class="w-[100px]"
        />
      </div>

      <!-- TODO make loader in center -->

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
