import { defineStore } from 'pinia'
import { ref } from 'vue'
import api from '@/services/api'

export const useRestaurantStore = defineStore('restaurant', () => {
  const message = ref('')
  const restaurants = ref([])
  const isError = ref(false)
  const isAuthenticated = ref(false)
  async function getRestaurants() {
    try {
      const response = await api.get('/restaurants', {
      })
      restaurants.value = response.data
      isError.value = false
      isAuthenticated.value = true
      message.value = 'Connexion réussie !'
    } catch (err) {
      console.error("Détail de l'erreur:", err)
      message.value =
        "Impossible d'envoyer votre message. Merci de corriger les erreurs et réessayer."
      isError.value = true
      isAuthenticated.value = false
    }
  }
  return {
    restaurants,
      message,
      isError,
      isAuthenticated,
      getRestaurants
  }
})
