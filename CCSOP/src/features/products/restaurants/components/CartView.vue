<script setup>
import { ref, computed } from 'vue'
const cartItems = ref([
  {
    id: 1,
    name: 'Pâtes Carbonara Traditionnelles',
    price: 14.5,
    quantity: 2,
  },
  {
    id: 4,
    name: 'Tiramisu Classique',
    price: 7.0,
    quantity: 1,
  },
])
const increment = (item) => {
  item.quantity++
}

const decrement = (item) => {
  if (item.quantity > 1) {
    item.quantity--
  } else {
    removeItem(item.id)
  }
}

const removeItem = (id) => {
  cartItems.value = cartItems.value.filter((item) => item.id !== id)
}

const subtotal = computed(() => {
  return cartItems.value.reduce((acc, item) => acc + item.price * item.quantity, 0)
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
  return subtotal.value + taxes.value+TVA.value;
})
</script>

<template>
  <body data-path-to-root="../" class="u-body u-clearfix u-xl-mode" data-lang="fr">
    <section
      class="u-align-center u-clearfix u-container-align-center u-grey-10 u-section-1"
      id="cart-summary"
    >
      <div class="u-clearfix u-sheet u-sheet-1">
        <h2 class="u-align-center u-text u-text-default u-text-1">Votre Panier</h2>

        <div v-if="cartItems.length === 0" class="empty-cart">
          <p>Votre panier est actuellement vide.</p>
        </div>

        <div v-else class="cart-container">
          <div class="cart-items-list">
            <div v-for="item in cartItems" :key="item.id" class="cart-item-card">
              <div class="item-info">
                <h4 class="u-text-2">{{ item.name }}</h4>
                <p class="u-text-3">Prix unitaire : {{ item.price.toFixed(2) }} €</p>
              </div>

              <div class="item-actions">
                <div class="quantity-selector">
                  <button @click="decrement(item)" class="qty-btn">-</button>
                  <span class="qty-display">{{ item.quantity }}</span>
                  <button @click="increment(item)" class="qty-btn">+</button>
                </div>
                <span class="item-total">
                  <strong>{{ (item.price * item.quantity).toFixed(2) }} €</strong>
                </span>
                <button @click="removeItem(item.id)" class="remove-btn" title="Supprimer">×</button>
              </div>
            </div>
          </div>

          <div class="cart-summary-box">
            <h3>Résumé de la commande</h3>
            <div class="summary-line">
              <span>Sous-total</span>
              <span>{{ subtotal.toFixed(2) }} €</span>
            </div>
            <div class="summary-line">
              <span>Consigne (10%)</span>
              <span>{{ taxes.toFixed(2) }} €</span>
            </div>
            <div class="summary-line">
              <span>TVA (8,1%)</span>
              <span>{{ TVA.toFixed(2) }} €</span>
            </div>
            <hr class="summary-divider" />
            <div class="summary-line final-line">
              <span>Prix final</span>
              <span>{{ finalPrice.toFixed(2) }} €</span>
            </div>

            <button class="u-btn u-button-style checkout-btn">Valider la commande</button>
          </div>
        </div>
      </div>
    </section>
  </body>
</template>

<style scoped>
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

.item-actions {
  display: flex;
  align-items: center;
  gap: 20px;
}

.quantity-selector {
  display: flex;
  align-items: center;
  gap: 10px;
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
}

.item-total {
  font-size: 1.1rem;
  color: #2c3e50;
  min-width: 70px;
  text-align: right;
}

.remove-btn {
  background: none;
  border: none;
  font-size: 1.5rem;
  color: #ff5722;
  cursor: pointer;
  padding: 0 5px;
}

.remove-btn:hover {
  color: #e64a19;
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

@media (max-width: 767px) {
  .cart-item-card {
    flex-direction: column;
    align-items: flex-start;
    gap: 15px;
  }

  .item-actions {
    width: 100%;
    justify-content: space-between;
  }
}
</style>
