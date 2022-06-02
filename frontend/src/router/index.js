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
  {
    path: '/admin/dashboard',
    name: 'admin-dashboard',
    meta: { title: 'Dashboard' },
    component: () => import('@/views/admin/Dashboard.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});
router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('TOKEN');
  if (!token) {
    if (to.name === 'login-page') {
      next();
    } else {
      next();
    }
  } else {
    next();
  }
});
export default router;
