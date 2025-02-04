import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import Login from '@/views/Login.vue';
import Profile from '@/views/Profile.vue';
import Registry from './views/Registry.vue';
import QRcode from './views/QRcode.vue';
import Organisation from './views/Organisation.vue';
import Activities from './views/Activities.vue';
import Verifications from './views/Verifications.vue';
import Search from './views/Search.vue';
import Chat from './views/Chat.vue';
import Community from './views/Community.vue';
import Activity from './views/Activity.vue';
import Onboarding from './views/Onboarding.vue';
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
      path: '/chat',
      name: 'chat',
      component: Chat,
      meta: { requiresAuth: true },
    },
    {
      path: '/community',
      name: 'community',
      component: Community,
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
      path: '/onboarding',
      name: 'onboarding',
      component: Onboarding,
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
      path: '/activity/:itemId',
      name: 'activity',
      component: Activity,
      meta: { requiresAuth: true },
      props: true,
    },
    {
      path: '/verifications',
      name: 'verifications',
      component: Verifications,
      meta: { requiresAuth: true },
    },
    {
      path: '/organisation',
      name: 'organisation',
      component: Organisation,
      meta: { requiresAuth: true },
    },
  ],
  scrollBehavior() {
    return { top: 0 };
  },
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
