<script setup xmlns="http://www.w3.org/1999/html">
import { onMounted, watch } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { useOrderStore } from '@/features/products/orders/stores/useOrderStore'
import { useAuthStore } from '@/features/auth/stores/useAuthStore'
const orderStore = useOrderStore()
const route = useRoute()
onMounted(async () => {
  const viewType = route.meta.viewType
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
      <div
        class="u-clearfix u-sheet u-valign-middle-lg u-valign-middle-md u-valign-middle-sm u-valign-middle-xs u-sheet-1"
      >
        <h2
          class="u-align-center u-text u-text-default u-text-1"
          data-animation-name="customAnimationIn"
          data-animation-duration="1500"
        >
          Nos missions partenaires
        </h2>
        <div class="u-expanded-width u-list u-list-1">
          <div class="u-repeater u-repeater-1">
            <div
              v-for="(mission, index) in orderStore.deliveries"
              :key="mission.id"
              :class="[
                'u-align-center u-container-align-center u-container-align-center-md u-container-align-center-sm u-container-align-center-xs u-container-style u-list-item u-repeater-item u-shape-rectangle u-video-cover u-white',
                `u-list-item-${index + 1}`,
              ]"
              data-animation-name="customAnimationIn"
              data-animation-duration="1500"
              data-animation-delay="500"
            >
              <div
                :class="[
                  'u-container-layout u-similar-container u-valign-top-md u-valign-top-sm u-valign-top-xs',
                  `u-container-layout-${index + 1}`,
                ]"
              >
                <img
                  alt=""
                  :class="['u-expanded-width u-image u-image-default', `u-image-${index + 1}`]"
                  :src="mission.orders[0]?.dish?.restaurant.picture"
                />
                <h4 :class="['u-align-center u-text', `u-text-${index * 2 + 2}`]">
                  {{ mission.name }}
                </h4>
                <p :class="['u-align-center u-text', `u-text-${index * 2 + 3}`]">En préparation</p>
                <p :class="['u-align-center u-text', `u-text-${index * 2 + 3}`]">
                  Nom du restaurant : {{ mission.orders[0]?.dish?.restaurant.name }}
                </p>
                <RouterLink :to="`/order/${mission.id}`" class="restaurant-link">
                  En savoir plus
                </RouterLink>
              </div>
            </div>
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
  --animation-custom_in-translate_x: 0px;
  --animation-custom_in-translate_y: 300px;
  --animation-custom_in-opacity: 0;
  --animation-custom_in-rotate: 0deg;
  --animation-custom_in-scale: 1;
  padding: 0 0 50px;
  font-size: 1.625rem;
  margin: 40px 30px 0;
  text-transform: uppercase;
  font-weight: 700;
}

.u-section-1 .u-sheet-1 {
  min-height: 1976px;
}

.u-section-1 .u-text-1 {
  font-size: 3.75rem;
  --animation-custom_in-translate_x: 0px;
  --animation-custom_in-translate_y: 0px;
  --animation-custom_in-opacity: 0;
  --animation-custom_in-rotate: 0deg;
  --animation-custom_in-scale: 0.3;
  margin: 60px auto 0;
}

.u-section-1 .u-list-1 {
  grid-template-rows: repeat(1, auto);
  margin: 66px 0 60px;
}

.u-section-1 .u-repeater-1 {
  grid-template-columns: repeat(3, calc(33.3333% - 16px));
  min-height: 1625px;
  --gap: 24px;
  grid-auto-columns: calc(33.3333% - 16px);
}

.u-section-1 .u-list-item {
  background-color: #ffffff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  margin-bottom: 24px;
  height: 450px;
}

.u-section-1 [class*='u-container-layout-'] {
  padding: 0 0 20px;
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;
}

.u-section-1 [class*='u-image-'] {
  width: 100%;
  height: 220px;
  object-fit: cover;
  margin: 0;
}

.u-section-1 {
  object-position: 100% 50%;
}

.u-section-1 {
  object-position: 50%;
}

.u-section-1 h4 {
  font-weight: 700;
  font-size: 1.4rem;
  margin: 15px 20px 0;
  color: #333;
}

.u-section-1 p {
  margin: 10px 20px auto;
  font-size: 0.95rem;
  color: #666;
  text-transform: none;
  font-weight: 400;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
}

.restaurant-link {
  display: inline-block;
  background-color: #0066cc;
  color: #ffffff !important;
  padding: 10px 20px;
  border-radius: 6px;
  text-decoration: none !important;
  font-size: 0.9rem;
  font-weight: 600;
  text-transform: uppercase;
  margin-bottom: 15px;
  transition: background-color 0.2s ease;
}

.restaurant-link:hover {
  background-color: #004c99;
}

@media (max-width: 1199px) {
  .u-section-1 .u-text-1 {
    margin-top: 117px;
  }

  .u-section-1 .u-repeater-1 {
    grid-template-columns: repeat(3, calc(33.3333% - 16px));
    min-height: 1340px;
    grid-gap: 24px;
    grid-auto-columns: calc(33.3333% - 16px);
  }

  .u-section-1 [class*='u-image-'] {
    height: 200px;
  }
}

@media (max-width: 991px) {
  .u-section-1 .u-text-1 {
    margin-top: 60px;
  }

  .u-section-1 .u-repeater-1 {
    grid-template-columns: repeat(2, calc(50% - 12px));
    min-height: 2566px;
    grid-auto-columns: calc(50% - 12px);
  }
}

@media (max-width: 767px) {
  .u-section-1 .u-repeater-1 {
    grid-template-columns: 100%;
    grid-auto-columns: 100%;
  }
}

@media (max-width: 575px) {
  .u-section-1 .u-text-1 {
    font-size: 2.34375rem;
  }
}
</style>
