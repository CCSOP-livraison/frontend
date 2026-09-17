<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/features/auth/stores/useAuthStore'

defineProps({
  isMobile: {
    type: Boolean,
    default: false,
  },
})

const authStore = useAuthStore()
const router = useRouter()

const orderLabel = computed(() => {
  if (!authStore.isAuthenticated) return ''
  switch (authStore.role) {
    case 'DELIVER':
      return 'voir mes livraisons'
    case 'CUSTOMER':
      return 'voir mes commandes'
    default:
      return ''
  }
})

const handleLogout = () => {
  authStore.logout()
  router.push('/login')
}
</script>

<template>
  <ul :class="['auth-links', { 'mobile-links': isMobile }]" role="menubar">
    <template v-if="authStore.isAuthenticated">
      <li role="none" class="u-nav-item" v-if="orderLabel">
        <RouterLink to="/orders" class="nav-link">
          {{ orderLabel }}
        </RouterLink>
      </li>
      <li role="none" class="u-nav-item" v-if="authStore.role === 'DELIVER'">
        <RouterLink to="/dashboard-deliver" class="nav-link">
          voir les missions disponibles
        </RouterLink>
      </li>
      <li role="none" class="u-nav-item" v-else-if="authStore.role === 'CUSTOMER'">
        <RouterLink to="/dashboard-customer" class="nav-link"> voir les restaurants </RouterLink>
      </li>

      <!-- Bouton de déconnexion -->
      <li role="none" class="u-nav-item">
        <button @click="handleLogout" class="logout-btn">se déconnecter</button>
      </li>
    </template>

    <template v-else>
      <li role="none" class="u-nav-item">
        <RouterLink to="/login" class="nav-link"> se connecter </RouterLink>
      </li>
      <li role="none" class="u-nav-item">
        <RouterLink to="/register" class="nav-link"> s'enregistrer </RouterLink>
      </li>
    </template>
  </ul>
</template>

<style scoped>
.auth-links {
  display: flex;
  align-items: center;
  gap: 25px;
  padding: 0;
  margin-top: 4vh;
}

.nav-link {
  color: #007bff;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s ease;
}

.nav-link:hover {
  color: #0056b3;
}

.logout-btn {
  background: none;
  border: none;
  color: red;
  font-weight: 500;
  cursor: pointer;
  padding: 0;
  font-size: 1.2rem;
  transition: color 0.2s ease;
  margin-top: 0.1vh;
}

.logout-btn:hover {
  color: #0056b3;
}

.u-nav-item {
  margin: 0;
}

.mobile-links {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-top: 0;
}
</style>
