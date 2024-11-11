import axios from 'axios';
import { baseUrl } from '@utils';

// Sign Up / Зарегистрироваться
export const signup = async (data) => {
  try {
    const response = await axios({
      method: 'POST',
      url: `${baseUrl}/auth/signup`,
      data
    });

    return response.data;
  } catch (err) {
    console.log(err);
    // notification with error here
  }
};

// Log In / Войти
export const login = async (data) => {
  await axios({
    method: 'POST',
    url: `${baseUrl}/auth/login`,
    data
  })
};

// Log Out / Выйти
export const logout = async (data) => {
  await axios({
    method: 'POST',
    url: `${baseUrl}/auth/logout`,
    data
  })
};
