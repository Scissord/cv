

<script setup>
const css = {
  logo: `
    w-10 cursor-pointer
  `,
  icon: `
    hover:text-neutral-200
    hover:text-opacity-50
    transition duration-300
    ease cursor-pointer
  `,
  title: `
    hover:text-neutral-200
    hover:text-opacity-50
    transition duration-300
    ease cursor-pointer
    text-md
  `,
  link: `
    hover:text-blue-200
    hover:text-opacity-50
    transition duration-300
    ease cursor-pointer
    text-sky-700 text-sm
  `
}
</script>

<template>
  <footer class="flex items-center justify-center bg-zinc-900 text-white bg-opacity-90 py-12">
    <div class="container grid grid-cols-6 gap-6">
      <div class="col-span-2 flex flex-col gap-6">
        <div class="flex items-center">
          <img
            src="/pics/logo_light.svg"
            :class="css.logo"
          />
          <p class="font-mono text-lg font-bold">Nurdaulet Kumarbekov</p>
        </div>
        <p class="text-xs">
          This site was created to show you my
          skills in in web development. Main
          technologies: react, vue, nodejs. In
          this section you can connect with me!
        </p>
        <div class="flex items-center gap-3">
          <Icon icon="fa-brands fa-instagram" :class="css.icon" />
          <Icon icon="fa-brands fa-tiktok" :class="css.icon" />
          <Icon icon="fa-brands fa-linkedin" :class="css.icon" />
          <Icon icon="fa-brands fa-github" :class="css.icon" />
          <Icon icon="fa-brands fa-discord" :class="css.icon" />
          <Icon icon="fa-brands fa-google" :class="css.icon" />
          <Icon icon="fa-brands fa-whatsapp" :class="css.icon" />
          <Icon icon="fa-brands fa-telegram" :class="css.icon" />
          <Icon icon="fa-brands fa-vk" :class="css.icon" />
          <Icon icon="fa-brands fa-steam" :class="css.icon" />
        </div>
      </div>
      <div class="flex flex-col gap-3">
        <h1 :class="css.title">Products</h1>
        <p :class="css.link">WordPress Themes</p>
        <p :class="css.link">WooCommerce Themes</p>
        <p :class="css.link">HTML5 Templates</p>
        <p :class="css.link">Shopify Themes</p>
        <p :class="css.link">Zemez</p>
        <p :class="css.link">MotoCMS</p>
        <p :class="css.link">Welbium</p>
        <p :class="css.link">MotoPress</p>
        <p :class="css.link">MonsterONE</p>
        <p :class="css.link">Novi Builder</p>
      </div>
      <div class="flex flex-col gap-3">
        <h1 :class="css.title">Products</h1>
        <p :class="css.link">WordPress Themes</p>
        <p :class="css.link">WooCommerce Themes</p>
        <p :class="css.link">HTML5 Templates</p>
        <p :class="css.link">Shopify Themes</p>
        <p :class="css.link">Zemez</p>
        <p :class="css.link">MotoCMS</p>
        <p :class="css.link">Welbium</p>
        <p :class="css.link">MotoPress</p>
        <p :class="css.link">MonsterONE</p>
        <p :class="css.link">Novi Builder</p>
      </div>
      <div class="flex flex-col gap-3">
        <h1 :class="css.title">Products</h1>
        <p :class="css.link">WordPress Themes</p>
        <p :class="css.link">WooCommerce Themes</p>
        <p :class="css.link">HTML5 Templates</p>
        <p :class="css.link">Shopify Themes</p>
        <p :class="css.link">Zemez</p>
        <p :class="css.link">MotoCMS</p>
        <p :class="css.link">Welbium</p>
        <p :class="css.link">MotoPress</p>
        <p :class="css.link">MonsterONE</p>
        <p :class="css.link">Novi Builder</p>
      </div>
      <div class="flex flex-col gap-3">
        <h1 :class="css.title">Products</h1>
        <p :class="css.link">WordPress Themes</p>
        <p :class="css.link">WooCommerce Themes</p>
        <p :class="css.link">HTML5 Templates</p>
        <p :class="css.link">Shopify Themes</p>
        <p :class="css.link">Zemez</p>
        <p :class="css.link">MotoCMS</p>
        <p :class="css.link">Welbium</p>
        <p :class="css.link">MotoPress</p>
        <p :class="css.link">MonsterONE</p>
        <p :class="css.link">Novi Builder</p>
      </div>
      <div class="col-span-6 border-b"></div>
      <div class="col-span-2">
        <p class="text-xs">Copyright © 2024 Kumarbekov Inc. All rights not reserved.</p>
      </div>
      <div class="col-span-3 text-xs">
        <div class="flex items-center gap-6">
          <p>Privacy Policy</p>
          <p>|</p>
          <p>Terms of Use</p>
          <p>|</p>
          <p>Sales and Refunds</p>
          <p>|</p>
          <p>Legal</p>
          <p>|</p>
          <p>Site Map</p>
        </div>
      </div>
      <div class="col-span-1">
        <p class="text-xs text-right">Kazakhstan</p>
      </div>
    </div>
  </footer>
</template>

<style>
</style>
