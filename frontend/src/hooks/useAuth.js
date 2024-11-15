import { useUserStore } from '@store';
import { useAuthApi } from '@api';

const useAuth = () => {
  const userStore = useUserStore();
  const { signup, signin, logout } = useAuthApi();

  const handleSignUp = async (login, password, confirm, gender) => {
    await signup({ login, password, confirm, gender });
  };

  const handleSignIn = async (login, password) => {
    const data = await signin({ login, password });
    console.log(data);
    // set To Locale Storage and Pinia
    // here mistake naxuy
    console.log(userStore);
    userStore.setUser(data.user);
    userStore.setAccessToken(data.accessToken);
  };

  const handleLogout = () => {
    userStore.clearUser();
  };

  return {
    handleSignUp,
    handleSignIn,
    handleLogout
  }
};

export default useAuth;
