import { defineStore } from 'pinia';
import { ref } from 'vue';

const useModalStore = defineStore('modal', () => {
  const isVisible = ref(false);
  const title = ref('');
  const children = ref(null);

  function show(payload) {
    title.value = payload.title;
    children.value = payload.children;
    isVisible.value = true;
  }

  function hide() {
    title.value = '';
    children.value = null;
    isVisible.value = false;
  }

  return {
    isVisible,
    title,
    children,
    show,
    hide,
  };
});

export default useModalStore;
