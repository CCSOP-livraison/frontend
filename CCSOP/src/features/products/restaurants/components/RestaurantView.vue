<script setup>
import { onMounted } from 'vue'
import { useRestaurantStore } from '@/features/products/restaurants/stores/useRestaurantStore'
import { useRoute, useRouter } from 'vue-router'

const restaurantStore = useRestaurantStore()
const route = useRoute()
const router = useRouter()
const idRestaurant = route.params.id

onMounted(async () => {
  await restaurantStore.getRestaurant(idRestaurant)
})

const goToMenu = () => {
  router.push(`/menu/${idRestaurant}`)
}

// Fonction pour retourner à la page précédente
const goBack = () => {
  router.back()
}
</script>

<template>
  <!-- Remplacement de <body> par un conteneur flex global -->
  <div
    class="page-container u-grey-80 u-body u-clearfix u-xxl-mode"
    data-path-to-root="../"
    data-include-products="false"
    data-lang="fr"
  >
    <section class="u-clearfix u-section-1" id="block-3">
      <div class="u-clearfix u-sheet u-sheet-1">
        <!-- Bouton Retour -->
        <div class="mb-6">
          <button
            @click="goBack"
            class="px-4 py-2 text-sm font-semibold text-gray-300 bg-gray-700 hover:bg-gray-600 rounded-lg shadow transition-all duration-200 cursor-pointer border-none flex items-center gap-2"
          >
            ← Retour
          </button>
        </div>

        <div class="u-restaurant-layout">
          <div class="u-column-left">
            <img
              class="u-expanded-width-xs u-image u-image-default u-image-1"
              :src="restaurantStore.restaurant.picture"
              alt=""
            />
            <p class="u-text u-text-4">{{ restaurantStore.restaurant.summary }}</p>
            <div class="u-btn-container">
              <button
                @click="goToMenu()"
                class="px-6 py-3 text-white font-semibold bg-blue-600 hover:bg-blue-700 active:bg-blue-800 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer text-center border-none"
              >
                Voir la carte
              </button>
            </div>
            <div class="restaurant-card">
              <h2>Adresse</h2>
              <address class="restaurant-address">
                <span class="street">{{ restaurantStore.restaurant.address }}</span>
                <span class="city-line">
                  <span class="zipcode">{{ restaurantStore.restaurant.zipcode }}</span>
                  <span class="locality">{{ restaurantStore.restaurant.locate }}</span>
                </span>
              </address>
            </div>
          </div>

          <div class="u-column-right">
            <h1 class="u-text u-text-1">{{ restaurantStore.restaurant.name }}</h1>
            <p class="u-text u-text-3">{{ restaurantStore.restaurant.description }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.page-container {
  display: flex;
  flex-direction: column;
  min-height: 70vh;
  margin: 0 auto;
  max-width: 100%;
  width: 100%;
}

.u-section-1 {
  flex: 1;
}

.locality {
  padding: 2%;
}
.restaurant-card h2 {
  margin-top: 0;
  margin-bottom: 12px;
  color: #4694e3;
  font-size: 1.25rem;
}

.restaurant-address {
  font-style: normal;
  line-height: 1.5;
  color: #ffffff;
}

.street {
  display: block;
}

.city-line {
  display: block;
  font-weight: 500;
}

button {
  background-color: #4694e3;
  color: #ffffff;
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

.u-section-1 .u-sheet-1 {
  min-height: 711px;
  display: flex;
  flex-direction: column;
  padding: 40px 20px;
}

.u-section-1 .u-restaurant-layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  align-items: start;
}

.u-section-1 .u-column-left {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.u-section-1 .u-image-1 {
  width: 100%;
  height: 342px;
  object-fit: cover;
  margin: 0;
}

.u-section-1 .u-text-4 {
  font-size: 1.875rem;
  margin: 0;
}

.u-section-1 .u-column-right {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.u-section-1 .u-text-1 {
  margin: 0;
}

.u-section-1 .u-text-3 {
  margin: 0;
}

.u-section-1 .u-btn-container {
  display: flex;
  gap: 15px;
  margin-top: 10px;
}

.u-section-1 .u-btn-2 {
  --radius: 50px;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 0.875rem;
  letter-spacing: 1px;
  padding: 9px 34px 11px 33px;
  margin: 0;
}
</style>
