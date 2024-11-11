<script setup>
import Header from "./app/header/Header.vue";
import Footer from "./app/footer/Footer.vue";
import { useTheme } from "@store";

const theme = useTheme();

import { useModalStore } from '@store';
import { Modal } from '@components';

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
