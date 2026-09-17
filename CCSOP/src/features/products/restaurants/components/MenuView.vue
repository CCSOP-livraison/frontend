<script setup>
import { computed, onMounted, ref } from 'vue'
import { useRestaurantStore } from '@/features/products/restaurants/stores/useRestaurantStore'
import { useRoute, useRouter } from 'vue-router'
import { useAuthStore } from '@/features/auth/stores/useAuthStore'

const restaurantStore = useRestaurantStore()
const route = useRoute()
const router = useRouter()
const idRestaurant = route.params.id

onMounted(async () => {
  await restaurantStore.getMenu(idRestaurant)
})

const goBack = () => {
  router.back()
}

const increment = (item) => {
  item.quantity++
}

const decrement = (item) => {
  if (item.quantity > 0) {
    item.quantity--
  } else {
    removeItem(item.id)
  }
}
const cartEmpty = ref(true)
function goToOrder() {
  restaurantStore.createOrder(restaurantStore.menu, useAuthStore().userId)
}
const removeItem = (id) => {
  restaurantStore.menu = restaurantStore.menu.filter((item) => item.id !== id)
}

const subtotal = computed(() => {
  return restaurantStore.menu.reduce((acc, item) => acc + item.price * item.quantity, 0)
})

const taxRate = 0.1
const taxes = computed(() => {
  return subtotal.value * taxRate
})
const TVARate = 0.081
const TVA = computed(() => {
  return subtotal.value * TVARate
})

const finalPrice = computed(() => {
  if (subtotal.value > 0) {
    cartEmpty.value = false
  } else {
    cartEmpty.value = true
  }
  return subtotal.value + taxes.value + TVA.value
})
</script>

<template>
  <body data-path-to-root="../" class="u-body u-clearfix u-xl-mode" data-lang="fr">
    <section
      class="u-align-center u-clearfix u-container-align-center u-grey-10 u-section-1"
      id="cart-summary"
    >
      <div class="u-clearfix u-sheet u-sheet-1">
        <div class="back-btn-container">
          <button @click="goBack" class="back-btn">← Retour</button>
        </div>

        <h2 class="u-align-center u-text u-text-default u-text-1">La carte du restaurant</h2>

        <div v-if="restaurantStore.menu.length === 0" class="empty-cart">
          <p>Votre panier est actuellement vide.</p>
        </div>

        <div v-else class="cart-container">
          <div class="cart-items-list">
            <div v-for="item in restaurantStore.menu" :key="item.id" class="cart-item-card">
              <div class="item-info">
                <h4 class="u-text-2 u-align-left">{{ item.name }}</h4>
                <p class="u-text-3 u-align-left">description : {{ item.description }}</p>
              </div>

              <div class="item-actions-grid">
                <div class="price-col">
                  <span class="price-label">Prix unitaire</span>
                  <span class="value">{{ item.price.toFixed(2) }} CHF</span>
                </div>

                <div class="quantity-col">
                  <span class="price-label">Quantité</span>
                  <div class="quantity-selector">
                    <button @click="decrement(item)" class="qty-btn">-</button>
                    <span class="qty-display">{{ item.quantity }}</span>
                    <button @click="increment(item)" class="qty-btn">+</button>
                  </div>
                </div>

                <div class="price-col total-col">
                  <span class="price-label">Prix total</span>
                  <span class="value"
                    ><strong>{{ (item.price * item.quantity).toFixed(2) }} CHF</strong></span
                  >
                </div>
              </div>
            </div>
          </div>

          <div class="cart-summary-box">
            <h3>Résumé de la commande</h3>
            <div class="summary-line">
              <span>Sous-total</span>
              <span>{{ subtotal.toFixed(2) }} CHF</span>
            </div>
            <div class="summary-line">
              <span>Consigne (10%)</span>
              <span>{{ taxes.toFixed(2) }} CHF</span>
            </div>
            <div class="summary-line">
              <span>TVA (8,1%)</span>
              <span>{{ TVA.toFixed(2) }} CHF</span>
            </div>
            <hr class="summary-divider" />
            <div class="summary-line final-line">
              <span>Prix final</span>
              <span>{{ finalPrice.toFixed(2) }} CHF</span>
            </div>

            <button
              :disabled="cartEmpty"
              @click="goToOrder()"
              class="u-btn u-button-style checkout-btn"
            >
              Valider la commande
            </button>
          </div>
        </div>
      </div>
    </section>
  </body>
</template>

<style scoped>
.back-btn-container {
  display: flex;
  justify-content: flex-start;
  margin-bottom: 20px;
}

.back-btn {
  background-color: #ffffff;
  border: 1px solid #ccc;
  color: #333;
  padding: 8px 16px;
  font-size: 0.9rem;
  font-weight: 600;
  border-radius: 4px;
  cursor: pointer;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.05);
  transition: background-color 0.2s;
}

.back-btn:hover {
  background-color: #f0f0f0;
}

.item-actions-grid {
  display: grid;
  grid-template-columns: 120px 140px 120px;
  gap: 20px;
  align-items: center;
}

.price-col,
.quantity-col {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.price-label {
  font-size: 0.75rem;
  color: #888;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 4px;
  text-align: right;
}

.quantity-col {
  align-items: center;
}

.quantity-col .price-label {
  text-align: center;
}

.quantity-selector {
  display: flex;
  align-items: center;
  gap: 8px;
}

.qty-btn {
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  width: 25px;
  height: 25px;
  font-weight: bold;
  cursor: pointer;
  border-radius: 4px;
}

.qty-btn:hover {
  background-color: #e0e0e0;
}

.qty-display {
  font-size: 1rem;
  font-weight: 600;
  min-width: 20px;
  text-align: center;
}

.value {
  font-size: 1rem;
  color: #2c3e50;
}

@media (max-width: 767px) {
  .cart-item-card {
    flex-direction: column;
    align-items: stretch;
    gap: 15px;
  }

  .item-actions-grid {
    grid-template-columns: 1fr;
    gap: 15px;
  }

  .price-col,
  .quantity-col {
    align-items: flex-start;
  }

  .price-label,
  .quantity-col .price-label {
    text-align: left;
  }
}
.u-section-1 {
  background-image: none;
  padding: 40px 0;
}

.u-section-1 .u-sheet-1 {
  min-height: auto;
  max-width: 900px;
  margin: 0 auto;
}

.u-section-1 .u-text-1 {
  font-size: 3rem;
  margin: 20px auto 40px;
}

.empty-cart {
  text-align: center;
  font-size: 1.2rem;
  color: #666;
  padding: 40px;
}

.cart-container {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.cart-items-list {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.cart-item-card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #ffffff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 5px 5px 20px 0 rgba(0, 0, 0, 0.08);
}

.item-info {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.u-text-2 {
  font-size: 1.25rem;
  margin: 0;
  color: #333;
}

.u-text-3 {
  font-size: 0.9rem;
  color: #666;
  margin: 0;
}

.cart-summary-box {
  background: #ffffff;
  padding: 25px;
  border-radius: 8px;
  box-shadow: 5px 5px 20px 0 rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.cart-summary-box h3 {
  margin-top: 0;
  font-size: 1.5rem;
  color: #333;
  border-bottom: 2px solid #f0f0f0;
  padding-bottom: 10px;
}

.summary-line {
  display: flex;
  justify-content: space-between;
  font-size: 1.1rem;
  color: #555;
}

.summary-divider {
  border: none;
  border-top: 1px solid #eee;
  margin: 5px 0;
}

.final-line {
  font-weight: bold;
  font-size: 1.3rem;
  color: #2c3e50;
}

.checkout-btn {
  background-color: #ff5722;
  color: white;
  text-transform: uppercase;
  font-size: 0.9rem;
  font-weight: 700;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 10px;
  text-align: center;
}

.checkout-btn:hover {
  background-color: #e64a19;
}
</style>
