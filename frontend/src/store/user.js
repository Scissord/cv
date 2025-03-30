import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

const useUserStore = defineStore('user', () => {
  // State
  const data = ref(JSON.parse(localStorage.getItem('user')) || null);
  const accessToken = ref(localStorage.getItem('accessToken') || null);

  // Actions
  function setUser(userData) {
    data.value = userData;
    localStorage.setItem('user', JSON.stringify(userData));
  }

  function setAccessToken(tokenValue) {
    accessToken.value = tokenValue;
    localStorage.setItem('accessToken', tokenValue);
  }

  function clearUser() {
    data.value = null;
    accessToken.value = null;
    localStorage.removeItem('user');
    localStorage.removeItem('accessToken');
  }

  const isAuthenticated = computed(() => !!accessToken.value);

  return {
    data,
    accessToken,
    setUser,
    setAccessToken,
    clearUser,
    isAuthenticated
  };
});

export default useUserStore;
