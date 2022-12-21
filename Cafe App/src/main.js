import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import Home from './Home.vue';
import Menu from './components/Menu/Menu.vue';
import Cart from './components/Counter/Cart/Cart.vue';
import Confirmation from './components/Confirmation/Confirmation.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/home', component: Home },
    { path: '/menu', component: Menu },
    { path: '/cart/:id', component: Cart },
    { path: '/confirmation/:id', component: Confirmation },
  ],
});

const app = createApp(App);
app.use(router);
app.mount('#app');
