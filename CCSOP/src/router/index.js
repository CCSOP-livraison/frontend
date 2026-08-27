import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: '',
      component: () => import('@/views/RegisterView.vue')
    },
    {
      path: '/login',
      name: '',
      component: () => import('@/views/LoginView.vue')
    }
  ]
})

export default router
