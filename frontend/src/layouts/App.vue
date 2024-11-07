<script setup>
import Header from "./app/header/Header.vue";
import Footer from "./app/footer/Footer.vue";
import { useTheme } from "@store";

const theme = useTheme();
console.log(theme.theme);
</script>

<template>
  <div :class="theme.theme === 'dark' ? 'dark' : ''">
    <Header/>

    <main>
      <router-view/>
    </main>

    <Footer/>
  </div>
</template>

<style>
</style>
