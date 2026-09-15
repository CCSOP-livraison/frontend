<script setup>
import { computed } from 'vue'
import { useAuthStore } from '@/features/auth/stores/useAuthStore'

const authStore = useAuthStore()

const orderLabel = computed(() => {
  if (!authStore.isAuthenticated) {
    return ''
  }

  switch (authStore.role) {
    case 'DELIVER':
      return 'voir mes livraisons'

    case 'CUSTOMER':
      return 'voir mes commandes'
  }
})
</script>

<template>
  <div v-if="authStore.isAuthenticated">
    <ul class="auth-links">
      <li role="none" class="u-nav-item">
        <RouterLink to="/orders">
          {{ orderLabel }}
        </RouterLink>
      </li>
      <li v-if="authStore.role = 'DELIVER'">
        <RouterLink to="/dashboard-deliver"> voir les missions disponible </RouterLink>
      </li>
      <li v-else-if="authStore.role = 'CUSTOMER'">
        <RouterLink to="/dashboard-customer"> voir les restaurants </RouterLink>
      </li>
    </ul>
  </div>

  <div v-else>
    <ul class="auth-links">
      <li>
        <RouterLink to="/login"> se connecter </RouterLink>
      </li>
      <li>
        <RouterLink to="/register"> s'enregistrer </RouterLink>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.u-nav-item {
  margin-bottom: 0.5rem;
}
.auth-links {
  display: flex;
  gap: 1rem;
  margin: 0;
  padding: 0;
  list-style: none;
}
</style>
