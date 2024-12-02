import axios from 'axios';
import { baseUrl } from '@utils';
import { useNotificationStore, useUserStore } from '@store';

const useProductsApi = () => {
  const userStore = useUserStore();
  const notification = useNotificationStore();

  const getProducts = async (limit, page, search) => {
    try {
      const params = new URLSearchParams();
      params.append('limit', limit);
      params.append('page', page);

      //TODO should i add it?
      if (search) {
        params.append('search', search);
      }

      await new Promise(resolve => setTimeout(resolve, 5000));

      const response = await axios({
        method: 'GET',
        url: `${baseUrl}/products?${params.toString()}`,
        // headers: { 'Authorization': `Bearer ${userStore.accessToken}` },
        // withCredentials: true,
      })

      // notification.show('Ответ успешно создан!', 'success');

      return response.data;
    } catch (err) {
      handleError(err.message);
    }
  };

  const createProduct = async (id, data) => {
    try {
      const response = await axios({
        method: 'PATCH',
        url: `${baseUrl}/update_answer/${id}`,
        headers: { 'Authorization': `Bearer ${userStore.accessToken}` },
        withCredentials: true,
        data
      })
      notification.show('Ответ успешно обновлен!', 'success');

      return response.data;
    } catch (err) {
      handleError(err.message);
    }
  };

  const updateProduct = async (id) => {
    try {
      const response = await axios({
        method: 'DELETE',
        url: `${baseUrl}/delete_answer/${id}`,
        headers: { 'Authorization': `Bearer ${userStore.accessToken}` },
        withCredentials: true,
      })
      notification.show('Ответ успешно удалён!', 'success');

      return response.data;
    } catch (err) {
      handleError(err.message);
    }
  };

  const deleteProduct = async (id) => {

  };

  const handleError = (error) => {
    notification.show(error || 'Что-то пошло не так!', 'error');
  };

  return {
    getProducts,
    createProduct,
    updateProduct,
    deleteProduct
  };
};

export default useProductsApi;
