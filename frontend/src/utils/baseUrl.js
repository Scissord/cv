export const baseUrl = process.env.NODE_ENV === 'production'
  ? 'https://prod.com/api'
  : 'http://localhost:8080/api';

export default baseUrl;
