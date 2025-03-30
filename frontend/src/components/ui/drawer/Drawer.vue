<script setup>
import { watch } from 'vue';

const props = defineProps({
  isDrawerOpen: Object,
  toggleDrawer: Function
})
</script>

<template>
  <div
    :class="[
      'fixed overflow-hidden z-40 bg-black bg-opacity-50 inset-0 transform ease-in-out',
      isDrawerOpen.value
        ? 'transition-opacity opacity-100 duration-500 translate-x-0'
        : 'transition-all delay-500 opacity-0 translate-x-full'
    ]"
    @click="toggleDrawer"
  >
    <div
      :class="[
        'w-1/3 right-0 absolute bg-white h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform overflow-y-auto',
        isDrawerOpen.value
          ? 'translate-x-0'
          : 'translate-x-full'
      ]"
      @click.stop
    >
      <slot/>
    </div>
  </div>
</template>
