<script setup>
defineProps({
  type: {
    type: String,
    required: false,
    default: 'button',
  },
  text: {
    type: String,
    required: true,
  },
  className: {
    type: String,
    required: false,
    default: '',
  }
});
</script>

<template>
  <button
    :type="type"
    :class="['button', className]"
  >
    {{ text }}
  </button>
</template>

<style>
.button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  padding: 8px 15px;
  color: #fff;
  background-color: var(--primary-color);
  border-radius: 50px;
  transition: background-color 0.3s ease, box-shadow 0.3s ease, transform 0.1s ease;
  font-size: 16px;
  overflow: hidden;
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
</style>
