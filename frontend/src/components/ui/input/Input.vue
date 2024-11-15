<script setup>
defineProps({
  id: {
    type: String,
    required: false,
    default: ''
  },
  type: {
    type: String,
    required: false,
    default: 'text'
  },
  modelValue: {
    type: String,
    required: true
  },
  placeholder: {
    type: String,
    required: false,
    default: '...'
  },
  className: {
    type: String,
    required: false,
    default: ''
  },
  required: {
    type: Boolean,
    required: false,
    default: false
  }
});

const emit = defineEmits(['update:modelValue']);

const onInput = (event) => {
  emit('update:modelValue', event.target.value);
};
</script>

<template>
  <input
    :id="id"
    :type="type"
    :value="modelValue"
    @input="onInput($event)"
    :class="['input', className]"
    :placeholder="placeholder"
    :required="required"
  />
</template>

<style>
.input {
  width: 100%;
  padding: 0.8rem 1rem;
  font-size: 1rem;
  border-radius: 0.375rem;
  border: 2px solid #ccc;
  background-color: #fff;
  color: #333;
  transition: border-color 0.3s, box-shadow 0.3s;
  box-sizing: border-box;
}

/* Стиль для фокуса */
.input:focus {
  border-color: #4f83cc;
  box-shadow: 0 0 0 3px rgba(79, 131, 204, 0.3);
  outline: none;
}

/* Стиль для обязательных полей */
/* .input:required {
  border-color: #ff6f61;
} */

.input::placeholder {
  color: #999;
  font-style: italic;
}

/* Стиль для ошибок */
.input.is-error {
  border-color: #e74c3c;
  box-shadow: 0 0 0 3px rgba(231, 76, 60, 0.3);
}

/* Стили для различных размеров */
.input.small {
  padding: 0.6rem 0.8rem;
  font-size: 0.875rem;
}

.input.large {
  padding: 1rem 1.2rem;
  font-size: 1.125rem;
}

/* Адаптивность */
@media (max-width: 600px) {
  .input {
    font-size: 0.9rem;
  }
}

</style>
