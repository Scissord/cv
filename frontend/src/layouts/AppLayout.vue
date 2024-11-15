<script setup>
import { useModalStore, useThemeStore } from '@store';
import { Modal } from '@components';
import Header from "./app/header/Header.vue";
import Footer from "./app/footer/Footer.vue";

const theme = useThemeStore();
const modal = useModalStore();

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
