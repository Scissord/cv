import { defineStore } from 'pinia';
import { useToast } from 'vue-toastification'

const useNotificationStore = defineStore('notification', () => {
  const toast = useToast();

  function show(message, type) {
    toast(message, {
      type  // or "success", "error", "default", "info" and "warning"
    });
  };

  return {
    show
  };
});

export default useNotificationStore;
