<script setup>
import { useTheme } from "@store";

const theme = useTheme();

const css = {
  header: `
    sticky top-0 w-full
    h-[6vh] flex items-center
    justify-center bg-zinc-900
    text-white bg-opacity-75
  `,
  container: `
    h-full container mx-auto
    px-40 flex items-center
    justify-between
  `,
  logo: `
    w-6 cursor-pointer
  `,
  nav: `
    flex items-center
    justify-around
    gap-8 text-sm
  `,
  link: `
    hover:text-neutral-200
    hover:text-opacity-50
    transition duration-300
    ease cursor-pointer
  `,
};
</script>

<template>
  <header :class="css.header">
    <div :class="css.container">
      <nav :class="css.nav">
        <router-link
          to="/"
        >
          <img
            src="/pics/logo_light.svg"
            :class="css.logo"
          />
        </router-link>
        <router-link
          to="/auth"
          :class="css.link"
        >
          Auth
        </router-link>
        <router-link
          to="/shop"
          :class="css.link"
        >
          Shop
        </router-link>
        <router-link
          to="/kanban"
          :class="css.link"
        >
          Kanban
        </router-link>
        <router-link
          to="/chat"
          :class="css.link"
        >
          Chat
        </router-link>
        <Icon
          icon="fa-solid fa-language"
          :class="css.link"
        />
        <Icon
          :icon="theme.theme === 'light' ? 'fa-solid fa-moon' : 'fa-solid fa-sun'"
          :class="css.link"
          @click="theme.toggleTheme"
        />
      </nav>
    </div>
  </header>
</template>

<style>
</style>
