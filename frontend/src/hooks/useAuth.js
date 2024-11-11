import { useUser } from '@store';
import { signup, login, logout } from '@/api/authApi';

export default function useAuth() {
  const user = useUser();

  const handleSignUp = async () => {
    user.setUser({ id: 1, name: 'Иван' });
    user.setToken('abc123');
  };

  const handleLogin = async () => {
    user.setUser({ id: 1, name: 'Иван' });
    user.setToken('abc123');
  };

  const handleLogout = () => {
    user.clearUser();
  };

  return {
    handleSignUp,
    handleLogin,
    handleLogout
  }
};
