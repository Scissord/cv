import ErrorLayout from '@/layouts/Error.vue';
import Error from '@/pages/error/Error.vue';

const errorRoutes = {
  path: '/:pathMatch(.*)*',
  component: ErrorLayout,
  children: [
    { path: '', name: 'Error', component: Error },
  ],
}

export default errorRoutes;
