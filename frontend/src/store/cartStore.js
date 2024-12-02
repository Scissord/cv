import { defineStore } from 'pinia';
import { reactive } from 'vue';

const useCartStore = defineStore('cart', () => {
  const cart = reactive(false);

  return {
    cart
  };
});

export default useCartStore;
