import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import '../styles/index.css';

Vue.use(VueRouter);

const auth = '1'; // константа авторизации

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { auth: true },
  },
  {
    path: '/login',
    name: 'Login',
    meta: { layout: 'main' },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  const login = to.matched.some(({ meta }) => meta.auth);
  if (login && !auth) {
    next('/login');
  } else {
    next();
  }
});

export default router;
