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
  <div class="input-container">
    <input
      type="search"
      name="search"
      class="input"
      :value="searchQuery"
      @input="onInput"
      placeholder="SEARCH..."
    >
    <span class="icon">
      <svg
        v-if="!loading"
        viewBox="0 0 24 24"
        width="19px"
        height="19px"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path opacity="1" d="M14 5H20" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path opacity="1" d="M14 8H17" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M21 11.5C21 16.75 16.75 21 11.5 21C6.25 21 2 16.75 2 11.5C2 6.25 6.25 2 11.5 2" stroke="#000" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path> <path opacity="1" d="M22 22L20 20" stroke="#000" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </g>
      </svg>
      <Icon
        v-else
        icon="fa-solid fa-spinner"
        class="animate-spin text-black text-lg"
      />
    </span>
  </div>
</template>

<style scoped>
.input-container {
  min-width: 150px;
  position: relative;
}

.icon {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
}

.input {
  width: 100%;
  height: 40px;
  padding: 10px;
  padding-right: 2rem;
  transition: .2s linear;
  border: 2.5px solid black;
  font-size: 14px;
  letter-spacing: 2px;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  /* Inter,ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji" !important */
}

.input::placeholder {
  color: #4b5563;
  font-size: 14px;
  letter-spacing: 2px;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  opacity: 1;
}

.input:focus {
  outline: none;
  border: 0.5px solid black;
  box-shadow: -5px -5px 0px black;
}

.input-container:hover > .icon {
  animation: anim 1s linear infinite;
}

@keyframes anim {
  0%,
  100% {
    transform: translateY(-50%) scale(1);
  }

  50% {
    transform: translateY(-50%) scale(1.1);
  }
}
</style>
