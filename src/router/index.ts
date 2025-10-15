import { createRouter, createWebHistory } from 'vue-router';
import { AuthService } from '@/services/auth';
import Login from '@/pages/Login.vue';
import Upload from '@/pages/Upload.vue';

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login,
    meta: { requiresGuest: true },
  },
  {
    path: '/upload',
    name: 'Upload',
    component: Upload,
    meta: { requiresAuth: true },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = AuthService.isAuthenticated();

  if (to.meta.requiresAuth && !isAuthenticated) {
    next('/');
  } else if (to.meta.requiresGuest && isAuthenticated) {
    next('/upload');
  } else {
    next();
  }
});

export default router;
