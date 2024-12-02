<script setup>
import { ref } from 'vue';
import debounce from 'lodash/debounce';

const props = defineProps({
  modelValue: {
    type: String,
    required: true,
  },
});

const emits = defineEmits(['update:modelValue']);

const searchQuery = ref(props.modelValue);

const debouncedUpdate = debounce((value) => {
  emits('update:modelValue', value);
}, 1000);

const onInput = (e) => {
  searchQuery.value = e.target.value;
  debouncedUpdate(searchQuery.value);
};
</script>

<template>
  <div class="search-container">
    <input
      type="search"
      :value="searchQuery"
      @input="onInput"
      placeholder="Введите запрос..."
      class="search-input"
    />
  </div>
</template>

<style scoped>
.search-container {
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
}
.search-input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
}
</style>
