import { defineStore } from 'pinia'
import { ref } from 'vue'
import api from '@/services/api'
import router from '@/router'

export const useAuthStore = defineStore('auth', () => {
  const message = ref('')
  const isError = ref(false)
  const isAuthenticated = ref(false)
      async function login(username, password) {
        try {
          const response = await api.post('auth/login', {
            email: username,
            password: password
          })
          switch (response.data.roles[0].name) {
            case 'ADMIN':
              router.push('/dashboard-admin')
              break
            case 'MODERATION':
              router.push('/dashboard-moderation')
              break
            case 'CUSTOMER':
              router.push('/dashboard-customer')
              break
            case 'DELIVER':
              router.push('/dashboard-worker')
              break
          }
          isError.value = false
          isAuthenticated.value = true
          message.value = "Connexion réussie !"
        } catch (err) {
          console.error('Détail de l\'erreur:', err)
          message.value =
            "Impossible d'envoyer votre message. Merci de corriger les erreurs et réessayer."
          isError.value = true
          isAuthenticated.value = false
        }
      }
  async function register(email, password) {
  }

  return {
    message,
    isError,
    isAuthenticated,
    login,
    register
  }
})
