import { defineStore } from 'pinia'
import { ref } from 'vue'
import api from '@/services/api'

export const useAuthStore = defineStore('auth', () => {
  const message = ref('')
  const isError = ref(false)
  const isAuthenticated = ref(false)
      async function login(username, password) {
        try {
          // Utiliser POST et non GET pour envoyer des identifiants
          const response = await api.post('auth/login', {
            email: username,
            password: password
          })

          // Si Axios / instance personnalisée, les données sont dans response.data
          console.log('Connexion réussie:', response.data)

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
