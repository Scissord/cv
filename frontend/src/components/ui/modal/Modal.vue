<script setup>
const props = defineProps({
  title: String,
  children: Object
})

import { useModalStore } from '@store';
const modal = useModalStore();

</script>

<template>
  <div class="modal">
    <div class="modal-content">
      <h2>{{ title }}</h2>
      <component :is="children" />
      <button @click="modal.hide" class="bg-red-100">Закрыть</button>
    </div>
  </div>
</template>

<style>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
}

.modal-content {
  background: white;
  padding: 20px;
  border-radius: 10px;
}

</style>
