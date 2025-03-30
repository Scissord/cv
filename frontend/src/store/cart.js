import { defineStore } from 'pinia';
import { useNotificationStore } from '@store';
import { useLocalStorage } from '@hooks';

const useCartStore = defineStore('cart', () => {
  const notification = useNotificationStore();
  const cart = useLocalStorage('cart', {
    total_quantity: 0,
    products: []
  });

  const addProduct = (product, quantity) => {
    const existingProduct = cart.value.products.find((p) => p.id === product.id);

    if (!existingProduct) {
      cart.value.total_quantity++;
      cart.value.products.push({
        ...product,
        quantity
      });
    } else {
      cart.value.total_quantity++;
      existingProduct.quantity += 1;
    }
  };

  const deleteProduct = (product) => {
    const existingProduct = cart.value.products.find((p) => p.id === product.id);

    if (existingProduct) {
      if (existingProduct.quantity > 1) {
        existingProduct.quantity -= 1;
        cart.value.total_quantity--;
      } else {
        cart.value.products = cart.value.products.filter((p) => p.id !== product.id);
        cart.value.total_quantity--;
      };
    } else {
      notification.show("You cannot remove a product from your cart if it is not there", "error")
    };
  };

  const changeQuantity = (product, quantity) => {
    console.log(product.id, quantity);
    //TODO counter input
  };

  const clearCart = () => {
    cart.value = {
      quantity: 0,
      products: []
    };
  };

  return {
    data: cart,
    addProduct,
    deleteProduct,
    clearCart,
    changeQuantity
  };
});

export default useCartStore;
