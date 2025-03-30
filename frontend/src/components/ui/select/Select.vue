<script setup>
import { ref, onMounted, onBeforeUnmount, watch, computed } from 'vue';

const props = defineProps({
  modelValue: {
    type: [Object, Number, String],
    required: true,
  },
  options: {
    type: Array,
    required: true,
  },
  value: {
    type: String,
    required: false,
    default: 'value'
  },
  label: {
    type: String,
    required: false,
    default: 'label'
  },
});

const emits = defineEmits(['update:modelValue']);

const isOpen = ref(false);

const selectOption = (option) => {
  emits('update:modelValue', props.value ? option[props.value] : option.value, option);
  isOpen.value = !isOpen.value;
};

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};

const isObject = computed(() => {
  return typeof props.modelValue === 'object' && props.modelValue !== null && !Array.isArray(props.modelValue);
});

const displayedName = computed(() => {
  let localValue = isObject.value
    ? +props.modelValue[props.value || 'value']
    : +props.modelValue

  const option = props.options.find((option) => +option[props.value || 'value'] === localValue);

  return option ? (props.label ? option[props.label] : option.label) : 'SELECT...';
});
</script>

<template>
  <div class="select-container">
    <div
      class="selected"
      @click="toggleMenu"
    >
      <p
        :class="[
          'selected-text',
          displayedName === 'SELECT...' ? 'text-gray-600' : 'text-black'
        ]"
      >
        {{ displayedName }}
      </p>
      <Icon
        :class="['icon']"
        :icon="['fas', 'chevron-up']"
        :style="{ transform: `rotate(${isOpen ? 0 : 180}deg)` }"
      />
    </div>
    <div v-if="isOpen" class="menu">
      <div
        v-for="option in options"
        :key="option[value || 'value']"
        class="menu-item"
        @click="selectOption(option)"
      >
        <p class="menu-item-text">
          {{ option[label || 'label'] }}
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.select-container {
  min-width: 100px;
  position: relative;
  background: white;
}

.selected {
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 40px;
  padding: 10px;
  transition: .2s linear;
  border: 2.5px solid black;
  cursor: pointer;
  user-select: none;
}

.selected-text {
  font-size: 14px;
  letter-spacing: 2px;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}

.menu {
  position: absolute;
  min-height: 100px;
  max-height: 300px;
  top: 100%;
  width: 100%;
  background: white;
  z-index: 10;
  overflow-y: auto;
}

.menu-item {
  cursor: pointer;
  background-color: white;
  transition: background-color 0.3s ease;
  padding: 0.5rem 0.75rem;
}

.menu-item:hover {
  background-color: #e5e7eb;
}

.menu-item-text {
  font-size: 0.875rem;
  line-height: 1.25rem;
}

.icon {
  transition: transform 0.3s ease;
  transform-origin: center;
}
</style>
