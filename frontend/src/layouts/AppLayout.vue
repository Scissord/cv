<script setup>
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useUserStore, useModalStore, useThemeStore } from '@store';
import Header from "./app/header/Header.vue";
import Footer from "./app/footer/Footer.vue";

const user = useUserStore();
const theme = useThemeStore();
const modal = useModalStore();

const router = useRouter();

// onMounted(() => {
//   if (!user.isAuthenticated) {
//     router.push('/auth');
//   }
// });

//should add watch here
</script>

<template>
  <div :class="theme.theme === 'dark' ? 'dark' : 'light'">
    <Modal
      v-if="modal.isVisible"
      :title="modal.title"
      :children="modal.children"
    />
    <Header/>

    <main>
      <router-view/>
    </main>

    <Footer/>
  </div>
</template>

<style>
</style>
