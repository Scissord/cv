<script setup>
import { useRouter } from 'vue-router';
import AuthForm from "./blocks/AuthForm.vue";

const router = useRouter();
</script>

<template>
  <div class="relative">
    <div
      @click="router.push('/')"
      class="absolute top-5 left-5 border border-black p-2 flex items-center justify-center rounded-md cursor-pointer hover:opacity-50 transition-opacity duration-300 ease-in-out"
    >
      <Icon icon="fa-regular fa-circle-left" class="text-xl" />
    </div>
    <AuthForm/>
  </div>
</template>

<style lang="">

</style>
