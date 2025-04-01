export const baseUrl = process.env.NODE_ENV === 'production'
  ? 'https://prod.com/'
  : 'http://localhost:8080/';

export default baseUrl;
