import axios from 'axios';
import { baseUrl } from '@utils';
import { useUserStore, useNotificationStore } from '@store';

const useAuthApi = () => {
  const user = useUserStore();
  const notification = useNotificationStore();

  // SignUp / Зарегистрироваться
  const signup = async (login, password, confirm_password, gender) => {
    try {
      const response = await axios({
        method: "POST",
        url: `${baseUrl}/auth/signup`,
        withCredentials: true,
        data: {
          login,
          password,
          confirm_password,
          gender
        },
      });

      notification.show("Успешно!", "success");

      return response.data;
    } catch (err) {
      handleError(err.response.data.error);
    }
  };

  // SignIn / Войти
  const signin = async (login, password) => {
    try {
      console.log(login, password);
      const response = await axios({
        method: "POST",
        url: `${baseUrl}/auth/login`,
        withCredentials: true,
        data: {
          login,
          password
        },
      });

      user.setUser(response.data.user);
      user.setAccessToken(response.data.accessToken);
      notification.show("Успешно!", "success");

      return response.status;
    } catch (err) {
      handleError(err.response.data.message);
      return err.status;
    };
  };

  // LogOut / Выйти
  const logout = async (data) => {
    try {
      const response = await axios({
        method: "POST",
        url: `${baseUrl}/auth/logout`,
        withCredentials: true,
        data,
      });

      user.clearUser();
      notification.show("Успешно!", "success");

      return response.data;
    } catch (err) {
      handleError(err.response.data.message);
    }
  };

  // Обработка ошибки
  const handleError = (error) => {
    notification.show(error || 'Что-то пошло не так!', 'error');
  };

  return { signup, signin, logout };
};

export default useAuthApi;
