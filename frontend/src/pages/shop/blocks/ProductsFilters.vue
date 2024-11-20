<script setup>
import { ref, watch } from "vue";
import { Select, Search } from "@components";

const type = ref(2);
const types = [
  { value: 0, label: "da" },
  { value: 1, label: "net" },
  { value: 2, label: "poxuy" },
];

const handleChangeType = (selectedValue) => {
  type.value = selectedValue.value;
};

watch(type, (newVal, oldVal) => {
  console.log("Type changed:", oldVal, "->", newVal);
});
</script>

<template>
  <div class="w-full flex items-center justify-between">
    <Select
      :value="type"
      :options="types"
      :onChange="handleChangeType"
    />
    <Search />
  </div>
</template>
