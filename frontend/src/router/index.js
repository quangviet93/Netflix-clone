import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'landing-page',
    meta: { title: 'NetFlix' },
    component: () => import('@/views/LandingPage.vue'),
  },
  {
    path: '/register',
    name: 'register-page',
    meta: { title: 'NetFlix' },
    component: () => import('@/views/RegisterPage.vue'),
  },
  {
    path: '/login',
    name: 'login-page',
    meta: { title: 'NetFlix' },
    component: () => import('@/views/LoginPage.vue'),
  },
  {
    path: '/home',
    name: 'home-page',
    meta: { title: 'NetFlix' },
    component: () => import('@/views/HomePage.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
