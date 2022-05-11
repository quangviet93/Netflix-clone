import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'landing-page',
    meta: { title: 'NFT Artists' },
    component: () => import('@/views/LandingPage.vue'),
  },
  {
    path: '/login',
    name: 'login-page',
    meta: { title: 'NFT Artists' },
    component: () => import('@/views/LoginPage.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
