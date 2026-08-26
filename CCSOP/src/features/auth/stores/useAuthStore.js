import { defineStore } from 'pinia'
import { ref } from 'vue'
import api from '@/services/api'

export const useAuthStore = defineStore('auth', () => {
  const message = ref('')
  const isError = ref(false)
  const isAuthenticated = ref(false)

  async function login(username, password) {
    try {
      const token = btoa(`${username}:${password}`)

      const response = await api.get('/login', {
        headers: {
          'Authorization': `Basic ${token}`
        }
      })

      message.value = response.data.message
      isError.value = false
      isAuthenticated.value = true
    } catch (err) {
      message.value = "Échec de l'authentification (401 Unauthorized)"
      isError.value = true
      isAuthenticated.value = false
    }
  }

  return {
    message,
    isError,
    isAuthenticated,
    login
  }
})
