<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router' // 1. Import de useRouter
import { useOrderStore } from '@/features/products/orders/stores/useOrderStore'
import { useAuthStore } from '@/features/auth/stores/useAuthStore'

const orderStore = useOrderStore()
const route = useRoute()
const router = useRouter() // 2. Initialisation du router
const idOrder = route.params.id

onMounted(async () => {
  await orderStore.getDelivery(idOrder)
})

// 3. Fonction pour retourner en arrière
function goBack() {
  router.back()
}

const order = ref({
  status: 'delivering',
  statusText: 'En cours de livraison',
})

const subtotal = computed(() => {
  return (
    orderStore.delivery?.orders?.reduce((acc, item) => acc + item.dish.price * item.quantity, 0) ??
    0
  )
})

function assignDeliver() {
  orderStore.putStatusPreparing(idOrder, useAuthStore().userId)
}

function validationDeliver() {
  orderStore.putStatusDelivered(idOrder)
}

function closeDeliver() {
  orderStore.putStatusClose(idOrder)
}

const taxRate = 0.1
const taxes = computed(() => {
  return subtotal.value * taxRate
})
const TVARate = 0.081
const TVA = computed(() => {
  return subtotal.value * TVARate
})

const finalPrice = computed(() => {
  return subtotal.value + taxes.value + TVA.value
})

const steps = computed(() => {
  const statusKey = orderStore.delivery.status?.name

  return [
    {
      title: 'Commande confirmée',
      description: 'Votre paiement a été validé avec succès.',
      completed: ['preparing', 'delivered', 'closed'].includes(statusKey),
      active: statusKey === 'pending',
    },
    {
      title: 'En cours de préparation',
      description: 'Le commerce prépare votre commande.',
      completed: ['delivered', 'closed'].includes(statusKey),
      active: statusKey === 'preparing',
    },
    {
      title: 'Livrée',
      description: 'La personne chargée de la livraison est arrivée vers chez vous.',
      completed: ['closed'].includes(statusKey),
      active: statusKey === 'delivered',
    },
    {
      title: 'Fermée',
      description: 'Bon appétit !',
      completed: statusKey === 'closed',
      active: false,
    },
  ]
})
</script>

<template>
  <div class="order-tracking-page">
    <div class="container">
      <!-- 4. Bouton Retour -->
      <button class="btn-back" @click="goBack">← Retour</button>

      <!-- En-tête de la commande -->
      <header class="order-header">
        <h1>Suivi de votre commande</h1>
        <p>numéro de commande : {{ orderStore.delivery.name }}</p>
      </header>

      <!-- Temps estimé -->
      <div
        class="estimated-time-card"
        v-if="order.status !== 'delivered' && order.status !== 'cancelled'"
      >
        <div class="time-icon">⏱️</div>
        <div>
          <p class="label">Arrivée estimée</p>
          <p class="time">15 min</p>
        </div>
      </div>

      <!-- Timeline de progression -->
      <div class="tracking-timeline">
        <h2>État d'avancement</h2>
        <div class="steps">
          <div
            v-for="(step, index) in steps"
            :key="index"
            :class="['step', { completed: step.completed, active: step.active }]"
          >
            <div class="step-indicator">
              <span class="dot"></span>
              <span class="line" v-if="index < steps.length - 1"></span>
            </div>
            <div class="step-content">
              <h3>{{ step.title }}</h3>
              <p>{{ step.description }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Informations de livraison et du livreur -->
      <div class="info-grid">
        <!-- Adresse -->
        <div class="card">
          <h3>📍 Adresse de livraison</h3>
          <p>
            <strong>
              {{ orderStore.delivery.customer?.firstname }}
              {{ orderStore.delivery.customer?.lastname }}
            </strong>
          </p>
          <p>{{ orderStore.delivery.customer?.address }}</p>
          <p>
            {{ orderStore.delivery.customer?.zipcode }} {{ orderStore.delivery.customer?.locate }}
          </p>
          <p>Numéro de téléphone : {{ orderStore.delivery.customer?.phoneNumber }}</p>
        </div>

        <!-- Contact Livreur -->
        <div class="card" v-if="orderStore.delivery.deliver && useAuthStore().role === 'CUSTOMER'">
          <h3>🛵 Votre livreur/livreuse</h3>
          <div class="delivery-person">
            <div>
              <p>
                <strong>
                  {{ orderStore.delivery.deliver?.firstname }}
                  {{ orderStore.delivery.deliver?.lastname }}
                </strong>
              </p>
              <p>Numéro de téléphone : {{ orderStore.delivery.deliver?.phoneNumber }}</p>
            </div>
          </div>
        </div>

        <!-- Contact restaurant -->
        <div class="card" v-if="useAuthStore().role === 'DELIVER'">
          <h3>Le restaurant</h3>
          <div class="delivery-person">
            <div>
              <p>
                <strong>{{ orderStore.delivery.orders[0]?.dish?.restaurant?.name }}</strong>
              </p>
              <p>{{ orderStore.delivery.orders[0]?.dish?.restaurant?.address }}</p>
              <p>
                {{ orderStore.delivery.orders[0]?.dish?.restaurant?.zipcode }}
                {{ orderStore.delivery.orders[0]?.dish?.restaurant?.locate }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Détails des articles -->
      <div class="card order-items-card">
        <h3>🛍️ Articles commandés</h3>
        <ul class="items-list">
          <li v-for="item in orderStore.delivery.orders" :key="item.id" class="item-row">
            <span class="item-name">{{ item.quantity }}x {{ item.dish.name }}</span>
            <span class="item-price">{{ (item.dish.price * item.quantity).toFixed(2) }} CHF</span>
          </li>
        </ul>
        <hr />
        <div class="order-total">
          <span>Total payé</span>
          <strong> {{ finalPrice.toFixed(2) }} CHF</strong>
        </div>
      </div>

      <div v-if="useAuthStore().role === 'DELIVER'" class="conteneur-btn">
        <div v-if="orderStore.delivery.deliver && orderStore.delivery.status?.name === 'preparing'">
          <button v-if="false">Echec de la livraison</button>
          <button @click="validationDeliver">Valider livraison</button>
        </div>
        <button v-if="orderStore.delivery.status?.name === 'pending'" @click="assignDeliver()">
          S'attribuer la livraison
        </button>
      </div>

      <div v-if="useAuthStore().role === 'CUSTOMER'" class="conteneur-btn">
        <button v-if="orderStore.delivery.status?.name === 'delivered'" @click="closeDeliver()">
          Valider livraison
        </button>
        <button v-if="false">Annuler livraison</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Style spécifique pour le bouton retour */
.btn-back {
  background-color: #e9ecef;
  color: #495057;
  padding: 8px 16px;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  margin-bottom: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  transition: background-color 0.2s;
}

.btn-back:hover {
  background-color: #dde2e6;
}

.conteneur-btn {
  text-align: center;
}

button {
  background-color: #4694e3;
  color: #ffffff;
  margin: 20px;
  align-content: center;
  padding: 12px 24px;
  border: none;
  border-radius: 40px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  transition:
    background-color 0.2s,
    transform 0.1s;
}

/* Style général de la page */
.order-tracking-page {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: #f8f9fa;
  color: #333;
  padding: 2rem 1rem;
  min-height: 100vh;
}

.container {
  max-width: 700px;
  margin: 0 auto;
}

/* En-tête */
.order-header {
  text-align: center;
  margin-bottom: 2rem;
}

.order-header h1 {
  font-size: 1.8rem;
  margin-bottom: 0.5rem;
}

/* Carte temps estimé */
.estimated-time-card {
  background: linear-gradient(135deg, #ff7e5f, #feb47b);
  color: white;
  padding: 1.2rem;
  border-radius: 12px;
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
  box-shadow: 0 4px 15px rgba(255, 126, 95, 0.3);
}

.time-icon {
  font-size: 2rem;
}

.estimated-time-card .label {
  font-size: 0.85rem;
  opacity: 0.9;
  margin: 0;
}

.estimated-time-card .time {
  font-size: 1.2rem;
  font-weight: bold;
  margin: 0;
}

/* Timeline */
.tracking-timeline {
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  margin-bottom: 1.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.tracking-timeline h2 {
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
}

.step {
  display: flex;
  gap: 1rem;
  position: relative;
}

.step-indicator {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.dot {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: #ddd;
  border: 3px solid #fff;
  box-shadow: 0 0 0 2px #ddd;
  z-index: 2;
}

.line {
  width: 2px;
  flex-grow: 1;
  background-color: #ddd;
  margin: 4px 0;
}

.step-content {
  padding-bottom: 2rem;
}

.step-content h3 {
  font-size: 1rem;
  margin: 0 0 0.2rem 0;
  color: #999;
}

.step-content p {
  font-size: 0.85rem;
  color: #777;
  margin: 0;
}

.step.completed .dot {
  background-color: #28a745;
  box-shadow: 0 0 0 2px rgba(40, 167, 69, 0.2);
}
.step.completed h3 {
  color: #333;
}
.step.active .dot {
  background-color: #ff7e5f;
  box-shadow: 0 0 0 4px rgba(255, 126, 95, 0.2);
  animation: pulse 1.5s infinite;
}
.step.active h3 {
  color: #ff7e5f;
  font-weight: bold;
}

@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0 rgba(255, 126, 95, 0.4);
  }
  70% {
    box-shadow: 0 0 0 8px rgba(255, 126, 95, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(255, 126, 95, 0);
  }
}

/* Grille d'informations */
.info-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
}

@media (min-width: 600px) {
  .info-grid {
    grid-template-columns: 1fr 1fr;
  }
}

.card {
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.card h3 {
  font-size: 1rem;
  margin-bottom: 1rem;
}

.card p {
  margin: 0.3rem 0;
  font-size: 0.9rem;
  color: #555;
}

.delivery-person {
  display: flex;
  align-items: center;
  gap: 1rem;
}

/* Liste des articles */
.order-items-card .items-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.item-row {
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0;
  font-size: 0.9rem;
  border-bottom: 1px solid #f1f1f1;
}

.order-total {
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
  font-size: 1.1rem;
}
</style>
