import { defineStore } from 'pinia'
import { reactive, ref } from 'vue'
import api from '@/services/api'
import router from '@/router'

export const useOrderStore = defineStore('OrderStore', () => {
  const message = ref('')
  const deliveries = ref([])
  const delivery = ref({})
  const isError = ref(false)
  async function getDeliveries() {
    try {
      const response = await api.get('/deliveries', {})
      deliveries.value = response.data
      isError.value = false
      message.value = 'données récupérées !'
    } catch (err) {
      console.error("Détail de l'erreur:", err)
      message.value =
        'Impossible de récupéré les données. Merci de corriger les erreurs et réessayer.'
      isError.value = true
    }
  }
  async function getDelivery(id) {
    try {
      const response = await api.get('/deliveries/' + id)
      delivery.value = response.data
      isError.value = false
      message.value = 'données récupérées !'
    } catch (err) {
      console.error("Détail de l'erreur:", err)
      message.value =
        'Impossible de récupéré les données. Merci de corriger les erreurs et réessayer.'
      isError.value = true
    }
  }
  async function getDeliveriesByDeliver(id) {
    try {
      const response = await api.get('/deliveries/deliver/' + id)
      deliveries.value = response.data
      isError.value = false
      message.value = 'données récupérées !'
    } catch (err) {
      console.error("Détail de l'erreur:", err)
      message.value =
        'Impossible de récupéré les données. Merci de corriger les erreurs et réessayer.'
      isError.value = true
    }
  }
  async function putStatusPreparing(id,deliverId) {
    try {
      await api.put('/deliveries/' + id + '/preparing',{deliverId:deliverId} )
      isError.value = false
      message.value = 'données changées !'
      router.push('/orders')
    } catch (err) {
      console.error("Détail de l'erreur:", err)
      message.value =
        'Impossible de récupéré les données. Merci de corriger les erreurs et réessayer.'
      isError.value = true
    }
  }
  async function putStatusDelivered(id) {
    try {
      await api.put('/deliveries/' + id +"/delivered")
      isError.value = false
      message.value = 'données changées !'
      router.push('/orders')
    } catch (err) {
      console.error("Détail de l'erreur:", err)
      message.value =
        'Impossible de récupéré les données. Merci de corriger les erreurs et réessayer.'
      isError.value = true
    }
  }
  async function putStatusClose(id) {
    try {
      await api.put('/deliveries/' + id + '/close')
      isError.value = false
      message.value = 'données changées !'
      router.push('/orders')
    } catch (err) {
      console.error("Détail de l'erreur:", err)
      message.value =
        'Impossible de récupéré les données. Merci de corriger les erreurs et réessayer.'
      isError.value = true
    }
  }
    async function getDeliveriesByCustomer(id) {
      try {
        const response = await api.get('/deliveries/customer/' + id)
        deliveries.value = response.data
        isError.value = false
        message.value = 'données récupérées !'
      } catch (err) {
        console.error("Détail de l'erreur:", err)
        message.value =
          'Impossible de récupéré les données. Merci de corriger les erreurs et réessayer.'
        isError.value = true
      }
  }
  return {
    deliveries,
    delivery,
    message,
    isError,
    putStatusPreparing,
    putStatusClose,
    putStatusDelivered,
    getDeliveries,
    getDelivery,
    getDeliveriesByCustomer,
    getDeliveriesByDeliver,
  }
})
