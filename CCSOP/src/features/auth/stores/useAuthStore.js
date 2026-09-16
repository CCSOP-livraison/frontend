import { defineStore } from 'pinia'
import { ref } from 'vue'
import api from '@/services/api'
import router from '@/router'

export const useAuthStore = defineStore('auth', () => {
  const message = ref('')
  const isError = ref(false)
  const isAuthenticated = ref(localStorage.getItem('isAuthenticated')||null)
  const userId=ref('')
  const role = ref('')

  function logout() {
    // 1. Réinitialiser les variables d'état
    message.value = null
    isError.value = null
    isAuthenticated.value = null
    userId.value= null
    role.value = null

    localStorage.removeItem('isAuthenticated')
  }

  async function login(email, password) {
        try {
          const response = await api.post('auth/login', {
            email: email,
            password: password
          })
          role.value = response.data.roles[0].name
          switch (role.value) {
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
              router.push('/dashboard-deliver')
              break
          }
          isError.value = false
          isAuthenticated.value = true
          message.value = 'Connexion réussie !'
          userId.value = response.data.id.toString()

        } catch (err) {
          console.error('Détail de l\'erreur:', err)
          message.value =
            "Impossible d'envoyer votre message. Merci de corriger les erreurs et réessayer."
          isError.value = true
          isAuthenticated.value = false
        }
      }
  async function register(
    firstname,
    lastname,
    address,
    locate,
    zipcode,
    phoneNumber,
    email,
    password,
  ) {
    try {
      const response = await api.post('auth/register', Request[{
        firstname: firstname,
        lastname: lastname,
        address: address,
        locate: locate,
        zipcode: zipcode,
        phoneNumber: phoneNumber,
        email: email,
        password: password,
      }])

      isError.value = false
      isAuthenticated.value = true
      message.value = 'Inscription réussie !'
      userId.value = response.data.id.toString()
    } catch (err) {
      console.error("Détail de l'erreur:", err)
      message.value =
        "Impossible d'envoyer votre message. Merci de corriger les erreurs et réessayer."
      isError.value = true
      isAuthenticated.value = false
    }
  }

  return {
    role,
    userId,
    message,
    isError,
    isAuthenticated,
    login,
    register,
    logout
  }
  },{
    persist: true,
})
