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
    path: '/admin',
    component: () => import('@/views/admin/Layout.vue'),
    children: [
      {
        path: '/admin/dashboard',
        name: 'admin-dashboard',
        meta: { title: 'Dashboard' },
        component: () => import('@/views/admin/Dashboard.vue'),
      },
      {
        path: '/admin/movie',
        name: 'admin-movie',
        meta: { title: 'Movie' },
        component: () => import('@/views/admin/Dashboard.vue'),
      },
      {
        path: '/admin/movie/add',
        name: 'admin-add-movie',
        meta: { title: 'Add movie' },
        component: () => import('@/views/admin/Dashboard.vue'),
      },
    ]
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('TOKEN');
  if (!token) {
    if (to.name === 'login-page' || to.name === 'landing-page' ) {
      next();
    } else {
      next({ name: 'landing-page' });
    }
  } else {
    if(to.name === 'landing-page') {
      next({ name: 'home-page' });
    } else {
      next();
    }
    
  }
});
export default router;
