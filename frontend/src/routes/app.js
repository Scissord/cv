import AppLayout from '@/layouts/AppLayout.vue';
import Home from '@/pages/home/Home.vue';
import Chat from '@/pages/chat/Chat.vue';
import Kanban from '@/pages/kanban/Kanban.vue';
import Shop from '@/pages/shop/Shop.vue';
import Script from '@/pages/script/Script.vue';

const appRoutes = {
  path: '/',
  component: AppLayout,
  children: [
    { path: '', name: 'Home', component: Home },
    { path: 'script', name: 'Script', component: Script },
    { path: 'chat', name: 'Chat', component: Chat },
    { path: 'kanban', name: 'Kanban', component: Kanban },
    { path: 'shop', name: 'Shop', component: Shop },
  ],
}

export default appRoutes;
