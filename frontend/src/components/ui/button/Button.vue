<script setup>
defineProps({
  type: {
    type: String,
    required: false,
    default: 'button',
  },
  text: {
    type: String,
    required: false,
  },
  icon: {
    type: [String, Array],
    required: false,
    default: '',
  },
  iconSize: {
    type: String,
    required: false,
    default: 'text-sm',
  }
});
</script>

<template>
  <button :type="type" class="button">
    <Icon
      v-if="icon !== ''"
      :icon="icon"
      :class="['left-icon', iconSize]"
    />
    <span v-if="text" class="button-text">{{ text }}</span>
  </button>
</template>

<style>
.button {
  width: fit-content;
  min-height: 10px;
  min-width: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  color: #fff;
  background-color: var(--primary-color);
  border-radius: 9999px;
  transition: background-color 0.3s ease, box-shadow 0.3s ease, transform 0.1s ease;
  font-size: 16px;
  cursor: pointer;
  gap: 8px; /* Расстояние между иконкой и текстом */
}

.button:hover {
  background-color: var(--primary-hover-color);
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
  transform: translateY(-2px);
}

.button:focus {
  outline: none;
  box-shadow: 0 0 0 2px rgba(229, 231, 235, 1), 0 0 0 2px var(--primary-color);
}

.button:active {
  transform: scale(0.95);
}

.left-icon {
  font-size: 16px; /* Размер иконки */
}

.button-text {
  white-space: nowrap; /* Чтобы текст не переносился */
}
</style>
