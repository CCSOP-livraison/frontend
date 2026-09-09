<template>
  <div class="order-tracking-page">
    <div class="container">
      <!-- En-tête de la commande -->
      <header class="order-header">
        <h1>Suivi de votre commande</h1>
        <p class="order-id"></p>
        <span :class="['badge', order.statusClass]">{{ order.statusText }}</span>
      </header>

      <!-- Temps estimé -->
      <div
        class="estimated-time-card"
        v-if="order.status !== 'delivered' && order.status !== 'cancelled'"
      >
        <div class="time-icon">⏱️</div>
        <div>
          <p class="label">Arrivée estimée</p>
          <p class="time">{{ order.estimatedTime }}</p>
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
            <strong>{{ order.deliveryAddress.name }}</strong>
          </p>
          <p>{{ order.deliveryAddress.street }}</p>
          <p>{{ order.deliveryAddress.city }}</p>
        </div>

        <!-- Contact Livreur (si en cours de livraison) -->
        <div class="card" v-if="order.deliveryPerson">
          <h3>🛵 Votre livreur</h3>
          <div class="delivery-person">
            <img :src="order.deliveryPerson.avatar" alt="Livreur" class="avatar" />
            <div>
              <p>
                <strong>{{ order.deliveryPerson.name }}</strong>
              </p>
              <button @click="callDriver" class="btn-secondary">📞 Appeler</button>
            </div>
          </div>
        </div>
      </div>

      <!-- Détails des articles -->
      <div class="card order-items-card">
        <h3>🛍️ Articles commandés</h3>
        <ul class="items-list">
          <li v-for="item in order.items" :key="item.id" class="item-row">
            <span class="item-name">{{ item.quantity }}x {{ item.name }}</span>
            <span class="item-price">{{ (item.price * item.quantity).toFixed(2) }} €</span>
          </li>
        </ul>
        <hr />
        <div class="order-total">
          <span>Total payé</span>
          <strong>{{ order.total.toFixed(2) }} €</strong>
        </div>
      </div>
      <div class="conteneur-btn">
        <button>Valider livraison</button>
        <button>Annuler livraison</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

// Données fictives de la commande (dans un vrai projet, ceci vient d'une API via fetch/axios)
const order = ref({
  id: 'CMD-84920',
  status: 'delivering', // Valeurs possibles : 'pending', 'preparing', 'delivering', 'delivered', 'cancelled'
  statusText: 'En cours de livraison',
  statusClass: 'badge-warning',
  estimatedTime: 'Dans 15 minutes (19:45)',
  deliveryAddress: {
    name: 'Jean Dupont',
    street: '12 Avenue de la Gare',
    city: '1003 Lausanne',
  },
  deliveryPerson: {
    name: 'Marc (Scooter Honda)',
    avatar:
      'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&h=100&q=80',
  },
  items: [
    { id: 1, name: 'Burger Maison Deluxe', quantity: 2, price: 14.5 },
    { id: 2, name: 'Frites croustillantes', quantity: 1, price: 4.5 },
    { id: 3, name: 'Boisson 50cl', quantity: 2, price: 3.0 },
  ],
  total: 39.5,
})

// Logique pour déterminer l'état des étapes de la timeline
const steps = computed(() => {
  // const currentStatus = order.status.value // ou order.value.status selon la structure
  const statusKey = order.value.status

  return [
    {
      title: 'Commande confirmée',
      description: 'Votre paiement a été validé avec succès.',
      completed: ['preparing', 'delivering', 'delivered'].includes(statusKey),
      active: statusKey === 'pending',
    },
    {
      title: 'En cours de préparation',
      description: 'Le commerçant prépare votre commande.',
      completed: ['delivering', 'delivered'].includes(statusKey),
      active: statusKey === 'preparing',
    },
    {
      title: 'En cours de livraison',
      description: 'Le livreur est en route vers chez vous.',
      completed: ['delivered'].includes(statusKey),
      active: statusKey === 'delivering',
    },
    {
      title: 'Livrée',
      description: 'Bon appétit !',
      completed: statusKey === 'delivered',
      active: false,
    },
  ]
})

// Action pour appeler le livreur
const callDriver = () => {
  alert('Appel du livreur en cours...')
}
</script>

<style scoped>
.conteneur-btn{
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

.order-id {
  color: #666;
  margin-bottom: 0.8rem;
}

.badge {
  display: inline-block;
  padding: 0.35rem 0.75rem;
  font-size: 0.85rem;
  font-weight: 600;
  border-radius: 50px;
}
.badge-warning {
  background-color: #fff3cd;
  color: #856404;
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

/* Étapes complétées ou actives */
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

/* Livreur */
.delivery-person {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
}

.btn-secondary {
  margin-top: 0.5rem;
  background-color: #e9ecef;
  border: none;
  padding: 0.4rem 0.8rem;
  border-radius: 6px;
  font-size: 0.85rem;
  cursor: pointer;
  font-weight: 600;
  transition: background 0.2s;
}

.btn-secondary:hover {
  background-color: #dde2e6;
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
