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
const loading = ref(false);

const debouncedUpdate = debounce((value) => {
  emits('update:modelValue', value);
  loading.value = false;
}, 1000);

const onInput = (e) => {
  searchQuery.value = e.target.value;
  loading.value = true;
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
    <!-- Loading spinner that appears when typing -->
    <div v-if="loading" class="loading-icon">
      <Icon
        icon="fa-solid fa-spinner"
        class="animate-spin text-sky-700"
      />
    </div>
  </div>
</template>

<style scoped>
.search-container {
  width: 100%;
  max-width: 500px;
  position: relative;
}

.search-input {
  width: 100%;
  padding: 4px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  padding-left: 12px;
}

.loading-icon {
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 20px;
  color: #888;
}
</style>
