import { defineStore } from 'pinia';

const useTheme = defineStore('user', {
  state: () => ({
    theme: localStorage.getItem('theme') || 'light',
  }),
  actions: {
    toggleTheme() {
      const data = this.theme === 'dark' ? 'light' : 'dark'
      this.theme = data;
      localStorage.setItem('theme', data);
    },
  },
  // getters: {
  //   get: (state) => state.theme,
  // },
});

export default useTheme;
