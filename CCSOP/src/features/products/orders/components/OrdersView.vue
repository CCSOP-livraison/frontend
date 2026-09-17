<script setup xmlns="http://www.w3.org/1999/html">
import { computed, onMounted } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { useOrderStore } from '@/features/products/orders/stores/useOrderStore'
import { useAuthStore } from '@/features/auth/stores/useAuthStore'
const orderStore = useOrderStore()
const route = useRoute()
const viewType = route.meta.viewType
onMounted(async () => {
  if (viewType === 'personnal') {
    if (useAuthStore().role === 'CUSTOMER') {
      await orderStore.getDeliveriesByCustomer(useAuthStore().userId)
    }
    if (useAuthStore().role === 'DELIVER') {
      await orderStore.getDeliveriesByDeliver(useAuthStore().userId)
    }
  }
  if (viewType === 'dashboard') {
    await orderStore.getDeliveries()
  }
})
const statusName = (status) => {
  switch (status) {
    case 'pending':
      return 'En attente'
    case 'preparing':
      return 'En cours de préparation'
    case 'delivered':
      return 'Livrée'
    case 'closed':
      return 'Terminé'
  }
}
</script>

<template>
  <body
    data-path-to-root="../"
    data-include-products="false"
    class="u-body u-clearfix u-xl-mode"
    data-lang="fr"
  >
    <section
      class="u-align-center u-clearfix u-container-align-center u-grey-10 u-section-1"
      id="block-2"
    >
      <div class="u-clearfix u-sheet u-sheet-1">
        <h2
          class="u-align-center u-text u-text-default u-text-1"
          v-if="viewType === 'personnal' && useAuthStore().role === 'CUSTOMER'"
        >
          vos commandes
        </h2>
        <h2
          class="u-align-center u-text u-text-default u-text-1"
          v-if="viewType === 'personnal' && useAuthStore().role === 'DELIVER'"
        >
          vos livraisons
        </h2>
        <h2 class="u-align-center u-text u-text-default u-text-1" v-if="viewType === 'dashboard'">
          Nos missions partenaires
        </h2>
        <div class="u-expanded-width u-list u-list-1">
          <div class="u-repeater u-repeater-1" v-if="useOrderStore().deliveries.length > 0">
            <div
              v-for="(mission, index) in orderStore.deliveries"
              :key="mission.id"
              :class="[
                'u-align-center u-container-align-center u-container-style u-list-item u-repeater-item u-shape-rectangle u-white',
                `u-list-item-${index + 1}`,
              ]"
            >
              <div class="u-container-layout">
                <img
                  alt=""
                  :class="['u-expanded-width u-image u-image-default', `u-image-${index + 1}`]"
                  :src="mission.orders[0]?.dish?.restaurant.picture"
                />
                <h4 class="u-align-center u-text">
                  {{ mission.name }}
                </h4>
                <p class="u-align-center u-text">{{ statusName(mission.status.name) }}</p>
                <p class="u-align-center u-text">
                  Nom du restaurant : {{ mission.orders[0]?.dish?.restaurant.name }}
                </p>
                <RouterLink :to="`/order/${mission.id}`" class="restaurant-link">
                  En savoir plus
                </RouterLink>
              </div>
            </div>
          </div>
          <div class="u-align-center u-text u-text-default u-text-1" v-else>
            Il n'y a rien ici pour l'instant.
          </div>
        </div>
      </div>
    </section>
  </body>
</template>

<style scoped>
.u-section-1 {
  background-image: none;
  box-shadow: 5px 5px 30px 0 rgba(0, 0, 0, 0.2);
  padding: 0 0 30px;
  font-size: 1.625rem;
  margin: 20px 20px 0;
  text-transform: uppercase;
  font-weight: 700;
  min-height: 60vh;
}

.u-section-1 .u-sheet-1 {
  min-height: auto;
  padding-bottom: 20px;
}

.u-section-1 .u-text-1 {
  font-size: 2.5rem;
  margin: 30px auto 20px;
}

.u-section-1 .u-list-1 {
  margin: 20px 0;
}

.u-section-1 .u-repeater-1 {
  grid-template-columns: repeat(3, calc(33.3333% - 16px));
  min-height: auto;
  --gap: 24px;
  grid-gap: 24px;
}

.u-section-1 .u-list-item {
  background-color: #ffffff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  height: 420px;
}

.u-section-1 .u-container-layout {
  padding: 0 0 15px;
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;
}

.u-section-1 [class*='u-image-'] {
  width: 100%;
  height: 180px;
  object-fit: cover;
  margin: 0;
}

.u-section-1 h4 {
  font-weight: 700;
  font-size: 1.2rem;
  margin: 10px 15px 0;
  color: #333;
}

.u-section-1 p {
  margin: 8px 15px auto;
  font-size: 0.9rem;
  color: #666;
  text-transform: none;
  font-weight: 400;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.restaurant-link {
  display: inline-block;
  background-color: #0066cc;
  color: #ffffff !important;
  padding: 8px 16px;
  border-radius: 6px;
  text-decoration: none !important;
  font-size: 0.85rem;
  font-weight: 600;
  text-transform: uppercase;
  margin-bottom: 10px;
  transition: background-color 0.2s ease;
}

.restaurant-link:hover {
  background-color: #004c99;
}

@media (max-width: 1199px) {
  .u-section-1 .u-repeater-1 {
    grid-template-columns: repeat(3, calc(33.3333% - 16px));
  }
}

@media (max-width: 991px) {
  .u-section-1 .u-repeater-1 {
    grid-template-columns: repeat(2, calc(50% - 12px));
  }
}

@media (max-width: 767px) {
  .u-section-1 .u-repeater-1 {
    grid-template-columns: 100%;
  }
}
</style>
