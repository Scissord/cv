<script setup>
const props = defineProps({
  title: String,
  children: Object
})

import { useModalStore } from '@store';
const modal = useModalStore();
</script>

<template>
  <div class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
    <div class="bg-white max-w-lg w-full mx-4 p-6 rounded-lg shadow-lg relative">
      <h2 class="text-2xl font-semibold mb-4">{{ title }}</h2>
      <component :is="children" />
      <Button
        text="Close"
        @click="modal.hide"
      />
    </div>
  </div>
</template>
