<script setup>
import { ref, computed } from 'vue';

const props = defineProps({
  brands: Array
});

const isBrandsOpen = ref(true);
const showAllBrands = ref(false);

const displayedBrands = computed(() => {
  return showAllBrands.value ? props.brands : props.brands.slice(0, 6);
});
</script>

<template>
  <div
    class="flex items-center justify-between bg-white px-5 py-3 cursor-pointer border-b select-none"
    @click="isBrandsOpen = !isBrandsOpen"
  >
    <h1 class="font-bold">Brands</h1>
    <!-- chevron -->
  </div>
  <div
    v-if="isBrandsOpen"
    class="flex flex-col gap-2 bg-white px-5 py-3 border-b"
  >
    <div
      v-for="brand in displayedBrands"
      :key="brand.id"
      class="flex items-center justify-between"
    >
      <p>{{ brand.name }}</p>
      <Checkbox v-model="brand.is_checked"/>
    </div>
    <p
      v-if="brands.length > 6"
      class="text-blue-500 cursor-pointer"
      @click="showAllBrands = !showAllBrands"
    >
      {{ showAllBrands ? 'Hide' : 'Show all' }}
    </p>
  </div>
</template>