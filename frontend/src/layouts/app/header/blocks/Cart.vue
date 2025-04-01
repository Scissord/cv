<script setup>
import { useCartStore } from '@store';
import ProductCard from './ProductCard.vue';

const cart = useCartStore();

const handleCheckout = () => {
  alert('Will be added in the next update!😊');
}
</script>

<template>
  <div v-if="cart.data.products.length > 0" class="p-6 flex flex-col gap-6">
    <h1 class="font-bold text-2xl">Cart:</h1>

    <div class="h-full flex flex-col gap-6">
      <ProductCard
        v-for="product in cart.data.products"
        :key="product.id"
        :product="product"
      />
    </div>

    <div class="flex items-center justify-between">
      <div class="flex items-center gap-3">
        <h1 class="font-bold text-2xl">Total:</h1>
        <p class="text-green-500 text-lg">
          {{
            cart.data.products.reduce((acc, item) => +item.price + acc, 0).toFixed(2) + '$'
          }}
        </p>
      </div>
      <Button
        text="Checkout"
        icon="fa-solid fa-credit-card"
        class="bg-green-500 hover:bg-green-600"
        @click="() => handleCheckout()"
      />
    </div>
  </div>
  <div v-else class="w-full h-full flex items-center justify-center">
    <h1 class="font-bold text-2xl">Cart is empty 😊!</h1>
  </div>
</template>