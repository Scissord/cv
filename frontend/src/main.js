import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './routes';
import registerPlugins from '@plugins';
import registerComponents from '@components';
import './style.css';

const app = createApp(App);
const pinia = createPinia();

registerComponents(app);
registerPlugins(app);

app.use(pinia);
app.use(router);
app.mount('#app');
