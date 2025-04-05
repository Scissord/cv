<script setup>
import { ref, reactive, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useUserStore, useThemeStore, useCartStore } from '@store';
import { useAuthApi } from '@api';
import Cart from './blocks/Cart.vue';

const user = useUserStore();
const theme = useThemeStore();
const cart = useCartStore();
const router = useRouter();
const route = useRoute();

const { logout } = useAuthApi();

const isDrawerOpen = reactive({
  value: false
});
const isUserMenuOpen = ref(false);

const toggleDrawer = () => {
  isDrawerOpen.value = !isDrawerOpen.value;
};

const toggleUserMenu = () => {
  isUserMenuOpen.value = !isUserMenuOpen.value;
};

watch(
  () => isDrawerOpen.value,
  newValue => {
    if (newValue) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }
);

const css = {
  header: `
    sticky top-0 w-full z-30
    h-[6vh] flex items-center
    justify-center bg-zinc-900
    text-white bg-opacity-90
  `,
  container: `
    h-full container mx-auto
    flex items-center
    justify-between
  `,
  logo: `
    w-6 cursor-pointer
  `,
  nav: `
    flex items-center
    justify-around
    gap-5 text-sm
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
  <Drawer :isDrawerOpen="isDrawerOpen" :toggleDrawer="toggleDrawer">
    <Cart />
  </Drawer>
  <header :class="css.header">
    <div :class="css.container">
      <nav :class="css.nav" style="font-family: monospace">
        <router-link to="/">
          <img src="/pics/logo_light.svg" :class="css.logo" />
        </router-link>
        <router-link v-if="!user.isAuthenticated" to="/auth" :class="css.link"> Auth </router-link>
        <router-link to="/shop" :class="css.link"> Shop </router-link>
        <router-link to="/kanban" :class="css.link"> Kanban </router-link>
        <router-link to="/chat" :class="css.link"> Chat </router-link>
        <Icon icon="fa-solid fa-language" :class="css.link + ' ml-auto'" />
        <Icon
          :icon="theme.theme === 'light' ? 'fa-solid fa-moon' : 'fa-solid fa-sun'"
          :class="css.link"
          @click="theme.toggleTheme"
        />
        <div v-if="route.path === '/shop'" class="relative" @click="toggleDrawer">
          <Icon :icon="['fas', 'cart-shopping']" :class="css.link" />
          <div
            v-if="cart.data.total_quantity > 0"
            class="absolute top-[-10px] right-[-10px] w-4 h-4 rounded-full bg-red-500 flex items-center justify-center"
          >
            <p class="text-[0.5rem] leading-none">
              {{ cart.data.total_quantity }}
            </p>
          </div>
        </div>
        <div v-if="user.isAuthenticated" :class="css.userMenuWrapper">
          <img
            v-if="user.data.avatar"
            :src="user.data.avatar"
            alt="User Picture"
            :class="css.avatar"
            @mouseover="toggleUserMenu"
          />
          <Icon
            v-else
            icon="fa-solid fa-circle-user"
            :class="css.link"
            @click="router.push('/auth')"
          />
          <div v-if="isUserMenuOpen" :class="css.userMenu" @mouseleave="toggleUserMenu">
            <ul class="p-2">
              <li :class="css.userLink">Profile</li>
              <li :class="css.userLink">Setting</li>
              <li :class="css.userLink" @click="logout">Exit</li>
            </ul>
          </div>
        </div>
        <Icon
          v-else
          icon="fa-solid fa-circle-user"
          :class="css.link"
          @click="router.push('/auth')"
        />
      </nav>
    </div>
  </header>
</template>

<style></style>
