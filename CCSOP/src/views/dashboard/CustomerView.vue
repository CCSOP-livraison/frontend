<script setup>
import { onMounted } from 'vue'
import { useRestaurantStore } from '@/features/products/restaurants/stores/useRestaurantStore'
import { RouterLink } from 'vue-router'

const restaurantStore = useRestaurantStore()

onMounted(async () => {
  await restaurantStore.getRestaurants()
})
</script>

<template>
  <div class="u-body u-clearfix u-xl-mode" data-lang="fr">
    <section class="u-align-center u-clearfix u-grey-10 u-section-1" id="block-2">
      <div class="u-clearfix u-sheet u-sheet-1">
        <h2 class="u-align-center u-text u-text-1">Nos restaurants partenaires</h2>

        <div class="u-expanded-width u-list">
          <div class="u-repeater">
            <div
              v-for="restaurant in restaurantStore.restaurants"
              :key="restaurant.id"
              class="u-align-center u-container-style u-list-item u-repeater-item u-shape-rectangle u-white"
            >
              <div class="u-container-layout">
                <img alt="" class="u-expanded-width u-image" :src="restaurant.picture" />
                <h4 class="u-align-center u-text">{{ restaurant.name }}</h4>
                <p class="u-align-center u-text">{{ restaurant.summary }}</p>
                <RouterLink :to="`/restaurant/${restaurant.id}`" class="restaurant-link">
                  En savoir plus
                </RouterLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.u-section-1 {
  background-image: none;
  box-shadow: 5px 5px 30px 0 rgba(0, 0, 0, 0.2);
  padding: 0 0 50px;
  font-size: 1.625rem;
  margin: 40px 30px 0;
  text-transform: uppercase;
  font-weight: 700;
}

.u-section-1 .u-sheet-1 {
  /* Remplacement des min-height fixes par un comportement flexible */
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}

.u-section-1 .u-text-1 {
  font-size: 3.75rem;
  margin: 60px auto;
}

.u-section-1 .u-repeater {
  display: grid;
  grid-template-columns: repeat(3, calc(33.3333% - 16px));
  gap: 24px;
  margin: 66px 0 60px;
}

.u-section-1 .u-list-item {
  background-color: #ffffff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  height: 450px;
}

.u-section-1 .u-container-layout {
  padding: 0 0 20px;
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;
}

.u-section-1 .u-image {
  width: 100%;
  height: 220px;
  object-fit: cover;
  object-position: 50%;
  margin: 0;
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
  .u-section-1 .u-repeater {
    grid-template-columns: repeat(3, calc(33.3333% - 16px));
  }
}

@media (max-width: 991px) {
  .u-section-1 .u-repeater {
    grid-template-columns: repeat(2, calc(50% - 12px));
  }
}

@media (max-width: 767px) {
  .u-section-1 .u-repeater {
    grid-template-columns: 100%;
  }
}

@media (max-width: 575px) {
  .u-section-1 .u-text-1 {
    font-size: 2.34375rem;
  }
}
</style>
