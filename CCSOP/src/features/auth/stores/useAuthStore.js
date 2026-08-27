import { defineStore } from 'pinia'
import { ref } from 'vue'
import api from '@/services/api'

export const useAuthStore = defineStore('auth', () => {
  const message = ref('')
  const isError = ref(false)
  const isAuthenticated = ref(false)

  async function login(username, password) {
    try {

      const response = await api.post('auth/login', {
        email: 'user@domain.com',
        password: 'password123'
      })
      isError.value = false
      isAuthenticated.value = true
    } catch (err) {
      message.value = "Échec de l'authentification (401 Unauthorized)"
      isError.value = true
      isAuthenticated.value = false
    }
  }

  async function register(email, password) {

      const response = await api.post('auth/register', {
        email: email,
        password: password
      })
  }

  return {
    message,
    isError,
    isAuthenticated,
    login,
    register
  }
})
