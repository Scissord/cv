// stores/products.js
import { defineStore } from 'pinia';
import { onMounted, ref } from 'vue';
import { fetchProducts, createProduct, updateProduct, deleteProduct } from '@/api/productsApi';

const useProductsStore = defineStore('products', () => {
  const limit = ref(10);
  const page = ref(1);
  const search = ref("");

  const products = ref([]);
  const total = ref(null);

  const error = ref(null);
  const isProductsGetLoading = ref(false);

  const getProducts = async () => {
    isProductsGetLoading.value = true;
    // await new Promise(resolve => setTimeout(resolve, 5000));
    try {
      const data = await fetchProducts({ limit: limit.value, page: page.value, search: search.value });
      products.value = data.products;
      total.value = data.total;
    } catch (err) {
      error.value = 'Ошибка при получении продуктов: ' + err.message;
      console.error(error.value);
    } finally {
      isProductsGetLoading.value = false;
    }
  };

  const addProduct = async (product, token) => {
    try {
      const newProduct = await createProduct(product, token);
      products.value.push(newProduct);
    } catch (err) {
      error.value = 'Ошибка при добавлении продукта: ' + err.message;
      console.error(error.value);
    }
  };

  const updateProductData = async (productId, product, token) => {
    try {
      const updatedProduct = await updateProduct(productId, product, token);
      const index = products.value.findIndex(p => p.id === productId);
      if (index !== -1) {
        products.value[index] = updatedProduct;
      }
    } catch (err) {
      error.value = 'Ошибка при обновлении продукта: ' + err.message;
      console.error(error.value);
    }
  };

  const deleteProductData = async (productId, token) => {
    try {
      await deleteProduct(productId, token);
      products.value = products.value.filter(p => p.id !== productId);
    } catch (err) {
      error.value = 'Ошибка при удалении продукта: ' + err.message;
      console.error(error.value);
    }
  };

  return {
    products,
    error,
    isProductsGetLoading,
    getProducts,
    addProduct,
    updateProductData,
    deleteProductData,
  };
});

export default useProductsStore;
