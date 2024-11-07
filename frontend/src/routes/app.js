import AppLayout from '@/layouts/App.vue';
import Home from '@/pages/home/Home.vue';
import Chat from '@/pages/chat/Chat.vue';
import Kanban from '@/pages/kanban/Kanban.vue';
import Shop from '@/pages/shop/Shop.vue';

const appRoutes = {
  path: '/',
  component: AppLayout,
  children: [
    { path: '', name: 'Home', component: Home },
    { path: 'chat', name: 'Chat', component: Chat },
    { path: 'kanban', name: 'Kanban', component: Kanban },
    { path: 'shop', name: 'Shop', component: Shop },
  ],
}

export default appRoutes;