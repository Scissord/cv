<script setup>
const props = defineProps({
  modelValue: {
    type: Number,
    default: 0,
  },
});

const emit = defineEmits([
  'update:modelValue',
  'increment',
  'decrement'
]);

const increment = () => {
  emit('update:modelValue', props.modelValue);
  emit('increment', props.modelValue);
};

const decrement = () => {
  if (props.modelValue > 0) {
    emit('update:modelValue', props.modelValue);
    emit('decrement', props.modelValue);
  }
};
</script>

<template>
  <div class="number-control">
    <div class="number-left" @click="decrement"></div>
    <input
      type="number"
      name="number"
      class="number-quantity"
      :value="modelValue"
      @input="($event) => emit('update:modelValue', +$event.target.value)"
    />
    <div class="number-right" @click="increment"></div>
  </div>
</template>


<style scoped>
.number-control {
  display: flex;
  align-items: center;
}

.number-left::before,
.number-right::after {
  content: attr(data-content);
  background-color: #333333;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  width: 30px;
  height: 30px;
  color: white;
  transition: background-color 0.3s;
  cursor: pointer;
}

.number-left::before {
  content: "-";
}

.number-right::after {
  content: "+";
}

.number-quantity {
  font-size: 0.875rem;
  line-height: 1.25rem;
  padding: 0.25rem;
  height: 30px;
  width: 50px;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  -moz-appearance: textfield;
}

.number-left:hover::before,
.number-right:hover::after {
  background-color: #666666;
}
</style>
