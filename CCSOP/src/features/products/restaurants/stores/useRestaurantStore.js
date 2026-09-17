import { defineStore } from 'pinia'
import { ref } from 'vue'
import api from '@/services/api'
import router from '@/router'

export const useRestaurantStore = defineStore('restaurantStore', () => {
  const message = ref('')
  const restaurants = ref([])
  const menu = ref([])
  const restaurant = ref({})
  const isError = ref(false)
  const isAuthenticated = ref(false)
  const order = ref({})
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
    }
  }
  async function createOrder(menu, customerId) {
    try {
       const menu2=menu.map(item=>{
          return {
            quantity: item.quantity,
            dishId: item.id,
        }
      });
      const response = await api.post('/deliveries', {
        menu: menu2,
        customerId: customerId,
      })

      isError.value = false
      message.value = 'Commande créer avec succès !'
      router.push(`/order/`+response.data.id.toString())
    } catch (err) {
      console.error("Détail de l'erreur:", err)
      message.value =
        "Impossible d'envoyer votre message. Merci de corriger les erreurs et réessayer."
      isError.value = true
    }
  }
  return {
    order,
    restaurants,
    restaurant,
    menu,
    message,
    isError,
    createOrder,
    isAuthenticated,
    getRestaurants,
    getRestaurant,
    getMenu,
  }
})
