import { useUser } from '@store';

export default function useAuth() {
  const user = useUser();

  const login = async () => {
    user.setUser({ id: 1, name: 'Иван' });
    user.setToken('abc123');
  };

  const logout = () => {
    user.clearUser();
  };

  return {
    login,
    logout
  }
};
