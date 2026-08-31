import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: '',
      component: () => import('@/views/HomeView.vue')
    },
    {
      path: '/login',
      name: '',
      component: () => import('@/views/LoginView.vue')
    },
    {
      path: '/register',
      name: '',
      component: () => import('@/views/RegisterView.vue')
    }
  ]
})

export default router
