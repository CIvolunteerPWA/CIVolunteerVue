import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import Login from '@/views/Login.vue';
import Profile from '@/views/Profile.vue';
import Registry from './views/Registry.vue';
import QRcode from './views/QRcode.vue';
import ProfileOrg from './views/Profile-Org.vue';
import Activities from './views/Activities.vue';
import Verifications from './views/Verifications.vue';
import Search from './views/Search.vue';

// Base URL should come from import.meta.env for Vite
const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_URL || '/'), 
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: { requiresAuth: true },
    },
    {
      path: '/qrcode',
      name: 'qrcode',
      component: QRcode,
      meta: { requiresAuth: true },
    },
    {
      path: '/search',
      name: 'search',
      component: Search,
      meta: { requiresAuth: true },
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/registry',
      name: 'registry',
      component: Registry,
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile,
      meta: { requiresAuth: true },
    },
    {
      path: '/activities',
      name: 'activites',
      component: Activities,
      meta: { requiresAuth: true },
    },
    {
      path: '/verifications',
      name: 'verifications',
      component: Verifications,
      meta: { requiresAuth: true },
    },
    {
      path: '/profileOrg',
      name: 'profileOrg',
      component: ProfileOrg,
      meta: { requiresAuth: true },
    },
  ],
});

// Navigation guards

router.beforeEach((to, from, next) => {
  const isAuthenticated = !!localStorage.getItem('authToken'); // Check if logged in
  if (to.meta.requiresAuth && !isAuthenticated) {
    next('/login'); // Redirect to login if not authenticated
  } else if (to.name === 'login' && isAuthenticated) {
    next('/'); // Redirect to home if logged in
  } else {
    next(); // Proceed normally
  }
});

export default router;
