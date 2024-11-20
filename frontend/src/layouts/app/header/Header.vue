<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useUserStore, useThemeStore } from "@store";
import { useAuth } from "@hooks";

const user = useUserStore();
const theme = useThemeStore();
const router = useRouter();

const { handleLogout } = useAuth();

const isUserMenuOpen = ref(false);

const showUserMenu = () => {
  isUserMenuOpen.value = true;
};

const hideUserMenu = () => {
  isUserMenuOpen.value = false;
};

const css = {
  header: `
    sticky top-0 w-full z-30
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
    w-full
  `,
  link: `
    hover:text-neutral-200
    hover:text-opacity-50
    transition duration-300
    ease cursor-pointer
  `,
  avatar: `
    hover:bg-opacity-50
    transition duration-300
    ease cursor-pointer
    rounded-full w-5
  `,
  userMenuWrapper: `
    relative inline-block
  `,
  userMenu: `
    absolute bg-white border
    rounded shadow-md right-0
    text-black text-sm mt-2
  `,
  userLink: `
    p-1 hover:bg-gray-100
    cursor-pointer
  `
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
          :class="css.link + ' ml-auto'"
        />
        <Icon
          :icon="theme.theme === 'light' ? 'fa-solid fa-moon' : 'fa-solid fa-sun'"
          :class="css.link"
          @click="theme.toggleTheme"
        />
        <div v-if="user.isAuthenticated" :class="css.userMenuWrapper">
          <img
            :src="user.data.avatar"
            alt="User Picture"
            :class="css.avatar"
            @mouseover="showUserMenu"
          />
          <div
            v-if="isUserMenuOpen"
            :class="css.userMenu"
            @mouseover="showUserMenu"
            @mouseleave="hideUserMenu"
          >
            <ul class="p-2">
              <li :class="css.userLink">Profile</li>
              <li :class="css.userLink">Setting</li>
              <li
                :class="css.userLink"
                @click="handleLogout"
              >
                Exit
              </li>
            </ul>
          </div>
        </div>
        <Icon
          v-else
          icon="fa-solid fa-circle-user"
          :class="css.link"
          @click='router.push("/auth")'
        />
      </nav>
    </div>
  </header>
</template>

<style>
</style>
