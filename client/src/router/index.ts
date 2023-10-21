import { createRouter, createWebHistory,  type NavigationGuardNext, type RouteLocationNormalized } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import { getSession } from '@/model/session';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    { path: "/login", name: "login", component: LoginView },
    {
      path: '/activity',
      name: 'activity',
      component: () => import('../views/MyActivity.vue'),
      beforeEnter: requireLogin,
    },
    {
      path: '/friends',
      name: 'friends',
      component: () => import('../views/FriendActivity.vue')
    },
  ],
});

function requireLogin(to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) {
  
  const session = getSession();
  if(!session.user){
    session.redirectUrl = to.fullPath;
    next('/login');
  }else{
    next();
  }
}

export default router
