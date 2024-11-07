import { createRouter, createWebHistory } from 'vue-router';
import appRoutes from './app';
import authRoutes from './auth';
import errorRoutes from './error';

const routes = [
  appRoutes,
  authRoutes,
  errorRoutes
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router;
