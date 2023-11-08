import { createApp } from 'vue';
import App from './App.vue';
import LandingPage from './views/LandingPage.vue';
import LoginPage from './views/LoginPage.vue';
import UserHome from './views/UserHome.vue'
import SignUpPage from './views/SignUpPage.vue';
import AccountDetails from './views/AccountDetails.vue'
import { createRouter, createWebHashHistory } from 'vue-router';
import { createPinia } from 'pinia';
import piniaPluginPersistedState from "pinia-plugin-persistedstate"
import './index.css';

const routes = [
  { path: '/', component: LandingPage },
  { path: '/login', component: LoginPage },
  { path: '/signup', component: SignUpPage },
  {path:'/user/home',component:UserHome},
  {path:'/user/details',component:AccountDetails}
];

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

const app = createApp(App);

const pinia = createPinia();
pinia.use(piniaPluginPersistedState)

// Expose the Pinia store as a global property
app.config.globalProperties.$pinia = pinia;

app.use(pinia);
app.use(router);

app.mount('#app');
