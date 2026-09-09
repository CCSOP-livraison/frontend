import { defineStore } from 'pinia'
import { ref } from 'vue'
import api from '@/services/api'

export const useOrderStore = defineStore('restaurantStore', () => {
  const message = ref('')
  const restaurants = ref([])
  const menu = ref([])
  const restaurant = ref({})
  const isError = ref(false)
  const isAuthenticated = ref(false)
  async function getRestaurants() {
    try {
      const response = await api.get('/restaurants', {
      })
      restaurants.value = response.data
      isError.value = false
      message.value = 'données récupérées !'
    } catch (err) {
      console.error("Détail de l'erreur:", err)
      message.value =
        "Impossible de récupéré les données. Merci de corriger les erreurs et réessayer."
      isError.value = true
      isAuthenticated.value = false
    }
  }
  async function getRestaurant(id) {
    try {
      const response = await api.get('/restaurants/'+id)
      restaurant.value = response.data
      console.log(restaurant)
      isError.value = false
      message.value = 'données récupérées !'
    } catch (err) {
      console.error("Détail de l'erreur:", err)
      message.value =
        'Impossible de récupéré les données. Merci de corriger les erreurs et réessayer.'
      isError.value = true
      isAuthenticated.value = false
    }
  }
  async function getMenu(id) {
    try {
      const response = await api.get("/restaurants/"+id+'/dishes')
      menu.value = response.data
      menu.value.forEach((item) => {
        item.quantity = 0
      })
      console.log(restaurant)
      isError.value = false
      message.value = 'données récupérées !'
    } catch (err) {
      console.error("Détail de l'erreur:", err)
      message.value =
        'Impossible de récupéré les données. Merci de corriger les erreurs et réessayer.'
      isError.value = true
      isAuthenticated.value = false
    }
  }
  return {
    restaurants,
    restaurant,
    menu,
    message,
    isError,
    isAuthenticated,
    getRestaurants,
    getRestaurant,
    getMenu,
  }
})
