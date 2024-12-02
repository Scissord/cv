<script setup>
import { onMounted } from 'vue';
import { useUserStore } from '@store';
import { useRouter } from 'vue-router';
const user = useUserStore();
const router = useRouter();

// onMounted(() => {
//   if (user.isAuthenticated) {
//     router.push('/');
//   }
// });

//should add watch here
</script>

<template>
  <main>
    <router-view/>
  </main>
</template>

<style>
</style>
