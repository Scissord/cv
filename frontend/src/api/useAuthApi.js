import axios from 'axios';
import { baseUrl } from '@utils';
import { useUserStore, useNotificationStore } from '@store';

const useAuthApi = () => {
  const user = useUserStore();
  const notification = useNotificationStore();

  const signin = async (login, password) => {
    try {
      const response = await axios({
        method: 'POST',
        url: `${baseUrl}/auth/login`,
        // withCredentials: true,
        data: {
          login,
          password
        }
      });

      user.setUser(response.data.user);
      user.setAccessToken(response.data.accessToken);
      notification.show('Успешно!', 'success');

      return response.status;
    } catch (err) {
      handleError(err.response.data.message);
      return err.status;
    }
  };

  const logout = async data => {
    try {
      const response = await axios({
        method: 'POST',
        url: `${baseUrl}/auth/logout`,
        headers: { Authorization: `Bearer ${user.accessToken}` },
        // withCredentials: true,
        data
      });

      user.logout();
      notification.show('Успешно!', 'success');

      return response.data;
    } catch (err) {
      handleError(err.response.data.message);
    }
  };

  const refresh = async () => {
    try {
      const response = await axios({
        method: 'POST',
        url: `${baseUrl}/auth/refresh`,
        headers: { Authorization: `Bearer ${user.accessToken}` }
        // withCredentials: true
      });

      if (response.data.newAccessToken) user.setAccessToken(response.data.newAccessToken);

      return response.data;
    } catch (err) {
      // means to throw away user from app
      handleError(err.response.data.message);
      user.logout();
    }
  };

  // Обработка ошибки
  const handleError = error => {
    notification.show(error || 'Что-то пошло не так!', 'error');
  };

  return { signin, logout, refresh };
};

export default useAuthApi;
