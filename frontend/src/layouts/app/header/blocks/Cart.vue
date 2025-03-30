<script setup>
import { useCartStore } from '@store';
import ProductCard from './ProductCard.vue';

const cart = useCartStore();
</script>

<template>
  <div class="p-6 flex flex-col gap-6">
    <h1 class="font-bold text-2xl">Cart</h1>

    <div class="h-full flex flex-col gap-6">
      <ProductCard
        v-for="product in cart.data.products"
        :key="product.id"
        :product="product"
      />
    </div>

    <!-- check  -->
    <!-- <div class="flex flex-col gap-3">
    </div> -->
  </div>
</template>