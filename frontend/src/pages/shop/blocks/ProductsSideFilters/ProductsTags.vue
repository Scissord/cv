<script setup>
import { ref, computed } from 'vue';

const props = defineProps({
  tags: Array
});

const isTagsOpen = ref(true);
const showAllTags = ref(false);

const displayedTags = computed(() => {
  return showAllTags.value ? props.tags : props.tags.slice(0, 6);
});
</script>

<template>
  <div
    class="flex items-center justify-between bg-white px-5 py-3 cursor-pointer border-b select-none"
    @click="isTagsOpen = !isTagsOpen"
  >
    <h1 class="font-bold">Tags</h1>
    <!-- chevron -->
  </div>
  <div
    v-if="isTagsOpen"
    class="flex flex-col gap-2 bg-white px-5 py-3"
  >
    <div
      v-for="tag in displayedTags"
      :key="tag.id"
      class="flex items-center justify-between"
    >
      <p>{{ tag.name }}</p>
      <Checkbox v-model="tag.is_checked"/>
    </div>
    <p
      v-if="tags.length > 6"
      class="text-blue-500 cursor-pointer"
      @click="showAllTags = !showAllTags"
    >
      {{ showAllTags ? 'Hide' : 'Show all' }}
    </p>
  </div>
</template>