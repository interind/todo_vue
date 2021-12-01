import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Register from '../views/Register.vue';
import '../styles/index.css';

Vue.use(VueRouter);

export const token = localStorage.getItem('jwt') || '';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { auth: true },
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    meta: { layout: 'main' },
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
  const login = to.matched.some((el) => el.meta.auth);
  console.log(token);
  if (login && !token) {
    next('/login');
  } else {
    next();
  }
});

export default router;
