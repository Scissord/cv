<script setup>
const props = defineProps({
  modelValue: {
    type: Boolean,
    required: true
  }
});

const emit = defineEmits(['update:modelValue']);
</script>

<template>
  <input
    type="checkbox"
    :checked="modelValue"
    @change="$emit('update:modelValue', $event.target.checked)"
    class="w-3 h-3 text-blue-600 border-gray-300 rounded focus:ring-blue-500 cursor-pointer"
  />
</template>
