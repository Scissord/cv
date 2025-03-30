import { ref, watch } from 'vue';

const useLocalStorage = (key, initialValue) => {
  const storedValue = localStorage.getItem(key);
  const state = ref(storedValue ? JSON.parse(storedValue) : initialValue);

  watch(
    state,
    (newValue) => {
      if (newValue !== null || newValue !== undefined || newValue !== "") {
        localStorage.setItem(key, JSON.stringify(newValue));
      } else {
        localStorage.removeItem(key);
      }
    },
    { deep: true }
  );

  return state;
}

export default useLocalStorage;
