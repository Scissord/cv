import axios from 'axios';
import { baseUrl } from '@utils';
import { useNotificationStore, useUserStore } from '@store';

const useProductsApi = () => {
  const userStore = useUserStore();
  const notification = useNotificationStore();

  const getProducts = async (limit, page, search, sort_by, order_by, categories, brands, tags) => {
    try {
      const params = new URLSearchParams();
      params.append('limit', limit);
      params.append('page', page);

      if (search) {
        params.append('search', search);
      };

      if (sort_by && order_by) {
        params.append('sort_by', sort_by);
        params.append('order_by', order_by);
      };

      if (Array.isArray(categories)) {
        const selectedCategories = categories
          .filter((category) => category.is_checked)
          .map((category) => category.id);

        if (selectedCategories.length > 0) {
          params.append('category_ids', JSON.stringify(selectedCategories));
        };
      };

      if (Array.isArray(brands)) {
        const selectedBrands = brands
          .filter((brand) => brand.is_checked)
          .map((brand) => brand.id);

        if (selectedBrands.length > 0) {
          params.append('brand_ids', JSON.stringify(selectedBrands));
        };
      };

      if (Array.isArray(tags)) {
        const selectedTags = tags
          .filter((tag) => tag.is_checked)
          .map((tag) => tag.id);

        if (selectedTags.length > 0) {
          params.append('tag_ids', JSON.stringify(selectedTags));
        };
      };

      // await new Promise(resolve => setTimeout(resolve, 5000));

      // console.log(params);

      const response = await axios({
        method: 'GET',
        url: `${baseUrl}/products?${params.toString()}`,
        // headers: { 'Authorization': `Bearer ${userStore.accessToken}` },
        // withCredentials: true,
      });

      // notification.show('Ответ успешно создан!', 'success');

      return response.data;
    } catch (err) {
      handleError(err.message);
    }
  };

  const getFilters = async () => {
    try {
      const response = await axios({
        method: 'GET',
        url: `${baseUrl}/products/filters`,
      })

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
    getFilters,
    createProduct,
    updateProduct,
    deleteProduct
  };
};

export default useProductsApi;
