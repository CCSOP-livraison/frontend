<script setup>
import { ref } from 'vue'

const menuItems = ref([
  {
    id: 1,
    name: 'Pâtes Carbonara Traditionnelles',
    description: "Spaghetti, guanciale, pecorino romano, jaunes d'œufs et poivre noir.",
    price: 14.5,
    quantity: 1,
  },
  {
    id: 2,
    name: 'Lasagnes Maison au Four',
    description: 'Bolognaise mijotée longuement, béchamel onctueuse et mozzarella fondante.',
    price: 16.0,
    quantity: 1,
  },
  {
    id: 3,
    name: "Penne all'Arrabbiata",
    description: 'Sauce tomate légèrement piquante, ail, persil et piment frais.',
    price: 12.5,
    quantity: 1,
  },
  {
    id: 4,
    name: 'Tiramisu Classique',
    description: 'Biscuits cuillère imbibés de café, mascarpone aérien et cacao amer.',
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
  }
}
</script>

<template>
  <body data-path-to-root="../" class="u-body u-clearfix u-xl-mode" data-lang="fr">
    <section
      class="u-align-center u-clearfix u-container-align-center u-grey-10 u-section-1"
      id="restaurant-menu"
    >
      <div class="u-clearfix u-sheet u-sheet-1">
        <h2 class="u-align-center u-text u-text-default u-text-1">Menu - Casa Bianca</h2>

        <div class="u-expanded-width u-list u-list-1">
          <div class="u-repeater u-repeater-1">

            <div
              v-for="item in menuItems"
              :key="item.id"
              class="u-align-center u-container-style u-list-item u-repeater-item u-shape-rectangle u-white"
            >
              <div class="u-container-layout u-container-layout-1">
                <h4 class="u-align-center u-text u-text-2">{{ item.name }}</h4>
                <p class="u-align-center u-text u-text-3">{{ item.description }}</p>

                <!-- Prix du plat -->
                <div class="u-text-price">
                  <strong>{{ item.price.toFixed(2) }} fr.</strong>
                </div>

                <!-- Gestion de la quantité -->
                <div class="quantity-selector">
                  <button @click="decrement(item)" class="qty-btn">-</button>
                  <span class="qty-display">{{ item.quantity }}</span>
                  <button @click="increment(item)" class="qty-btn">+</button>
                </div>

                <button class="u-btn u-button-style u-btn-1">Ajouter au panier</button>
              </div>
            </div>
          </div>
        </div>
        <div class="cart-link-container">
          <RouterLink
            class="u-align-center u-btn u-btn-round u-button-style u-hover-palette-1-light-1 u-palette-1-base u-radius u-btn-2"
            to="/cart"
            >voir la panier</RouterLink
          >
        </div>
      </div>
    </section>
  </body>
</template>

<style scoped>
.cart-link-container {
  display: flex;
  justify-content: center;
  margin-top: 40px;
}
.u-section-1 {
  background-image: none;
  padding: 40px 0;
}

.u-section-1 .u-sheet-1 {
  min-height: auto;
}

.u-section-1 .u-text-1 {
  font-size: 3rem;
  margin: 20px auto 40px;
}

.u-section-1 .u-repeater-1 {
  display: grid;
  grid-template-columns: repeat(2, calc(50% - 12px));
  gap: 24px;
}

.u-list-item {
  box-shadow: 5px 5px 30px 0 rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  background: #ffffff;
}

.u-container-layout-1 {
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.u-text-2 {
  font-size: 1.5rem;
  margin-bottom: 10px;
}

.u-text-3 {
  color: #666;
  margin-bottom: 15px;
  font-size: 0.95rem;
}

.u-text-price {
  font-size: 1.25rem;
  color: #2c3e50;
  margin-bottom: 15px;
}

.quantity-selector {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 20px;
}

.qty-btn {
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  width: 30px;
  height: 30px;
  font-weight: bold;
  cursor: pointer;
  border-radius: 4px;
}

.qty-btn:hover {
  background-color: #e0e0e0;
}

.qty-display {
  font-size: 1.1rem;
  font-weight: 600;
}

.u-btn-1 {
  background-color: #ff5722;
  color: white;
  text-transform: uppercase;
  font-size: 0.875rem;
  font-weight: 700;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.u-btn-1:hover {
  background-color: #e64a19;
}

@media (max-width: 767px) {
  .u-section-1 .u-repeater-1 {
    grid-template-columns: 100%;
  }
}
</style>
