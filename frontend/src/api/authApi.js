import axios from 'axios';
import { baseUrl } from '@utils';

// Получение списка продуктов
export const fetchProducts = async ({ limit, page, search }) => {
  const params = new URLSearchParams();
  params.append('limit', limit);
  params.append('page', page);

  if (search) {
    params.append('search', search);
  }

  const response = await axios.get(`${baseUrl}/products?${params.toString()}`);
  return response.data;
};

// Добавление продукта
export const createProduct = async (product, token) => {
  const response = await axios.post(`${baseUrl}/products`, product, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

// Обновление продукта
export const updateProduct = async (productId, product, token) => {
  const response = await axios.put(`${baseUrl}/products/${productId}`, product, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

// Удаление продукта
export const deleteProduct = async (productId, token) => {
  await axios.delete(`${baseUrl}/products/${productId}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};
