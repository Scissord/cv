<script setup>
const props = defineProps({
  category: Object,
});
</script>

<template>
  <div
    class="flex items-center justify-between"
  >
    <p>{{ category.name }}</p>
    <Checkbox v-model="category.is_checked"/>
  </div>
</template>
