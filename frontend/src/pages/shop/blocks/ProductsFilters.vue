<script setup>
import { ref, watch } from "vue";

defineProps({
  search: { type: String, required: true }
})

const type = ref({ value: 2, label: "poxuy" },);
const types = [
  { value: 0, label: "da" },
  { value: 1, label: "net" },
  { value: 2, label: "poxuy" },
];

watch(type, (newVal, oldVal) => {
  console.log("Type changed:", oldVal, "->", newVal);
});
</script>

<template>
  <div class="w-full flex items-center justify-between">
    <vSelect
      v-model="type"
      :options="types"
      :reduce="(option) => option"
      class="w-fit min-w-[150px]"
    />
    <!-- <Search
      v-model="search"
    /> -->
  </div>
</template>
