import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: '',
      component: () => import('@/views/HomeView.vue'),
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/LoginView.vue'),
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('@/views/RegisterView.vue'),
    },

    {
      path: '/dashboard-admin',
      name: 'dashboard-admin',
      component: () => import('@/views/dashboard/AdminView.vue'),
    },
    {
      path: '/dashboard-customer',
      name: 'dashboard-customer',
      component: () => import('@/views/dashboard/CustomerView.vue'),
    },
    {
      path: '/dashboard-moderation',
      name: 'dashboard-moderation',
      component: () => import('@/views/dashboard/ModerationView.vue'),
    },
    {
      path: '/orders',
      name: 'orders',
      component: () => import('@/features/products/orders/components/Orders.vue'),
    },
    {
      path: '/restaurant/:id',
      name: 'restaurant/:id',
      component: () => import('@/features/products/restaurants/components/RestaurantView.vue'),
    },
    {
      path: '/menu/:id',
      name: 'menu/:id',
      component: () => import('@/features/products/restaurants/components/MenuView.vue'),
    },
    {
      path: '/order/:id',
      name: 'order/:id',
      component: () => import('@/features/products/orders/components/OrderTracking.vue'),
    },
  ],
})

export default router
