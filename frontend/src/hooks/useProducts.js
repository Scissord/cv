import { useProductsApi } from '@api';

const useProducts = () => {
  const {
    getProducts,
    createProduct,
    updateProduct,
    deleteProduct
  } = useProductsApi();

  const fetchProducts = async (limit, page, search) => {
    const products = await getProducts(limit, page, search);
    return products;
  };

  // add
  // upgrade
  // destroy

  // const addProduct = async (product, token) => {
  //   try {
  //     const newProduct = await createProduct(product, token);
  //     products.value.push(newProduct);
  //   } catch (err) {
  //     error.value = 'Ошибка при добавлении продукта: ' + err.message;
  //     console.error(error.value);
  //   }
  // };

  // const updateProductData = async (productId, product, token) => {
  //   try {
  //     const updatedProduct = await updateProduct(productId, product, token);
  //     const index = products.value.findIndex(p => p.id === productId);
  //     if (index !== -1) {
  //       products.value[index] = updatedProduct;
  //     }
  //   } catch (err) {
  //     error.value = 'Ошибка при обновлении продукта: ' + err.message;
  //     console.error(error.value);
  //   }
  // };

  // const deleteProductData = async (productId, token) => {
  //   try {
  //     await deleteProduct(productId, token);
  //     products.value = products.value.filter(p => p.id !== productId);
  //   } catch (err) {
  //     error.value = 'Ошибка при удалении продукта: ' + err.message;
  //     console.error(error.value);
  //   }
  // };

  return {
    fetchProducts,
    // addProduct,
    // updateProductData,
    // deleteProductData,
  };
};

export default useProducts;
