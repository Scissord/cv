import { defineStore } from 'pinia';
import { ref } from 'vue';

const useThemeStore = defineStore('theme', () => {
  // State
  const theme = ref(localStorage.getItem('theme') || 'light');

  // Actions
  const toggleTheme = () => {
    const newTheme = theme.value === 'dark' ? 'light' : 'dark';
    theme.value = newTheme;
    localStorage.setItem('theme', newTheme);
  };

  return {
    theme,
    toggleTheme,
  };
});

export default useThemeStore;
