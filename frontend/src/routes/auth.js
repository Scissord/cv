import AuthLayout from '@/layouts/AuthLayout.vue';
import Auth from '@/pages/auth/Auth.vue';

const authRoutes = {
  path: '/',
  component: AuthLayout,
  children: [
    { path: '/auth', name: 'Auth', component: Auth },
  ],
}

export default authRoutes;
