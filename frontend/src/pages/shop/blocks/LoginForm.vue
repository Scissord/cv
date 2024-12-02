<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();

</script>

<template>
  <div class="bg-white min-h-screen flex flex-col items-center justify-center gap-3">
    <p class="font-semibold text-2xl">Please login to see Shop</p>
    <Button text="Login" @click="router.push('/auth')" />
  </div>
</template>