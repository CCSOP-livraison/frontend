<script setup>
import { ref } from 'vue'

const restaurants = ref([
  {
    id: 1,
    name: 'casa bianca',
    description: 'Casa bianca, le buffet de pâtes de vos rêves',
    image: '../../../public/images/photo-1473093295043-cdd812d0e601.jpeg',
    imageWidth: '1280',
    imageHeight: '854',
    delay: '500',
  },
  {
    id: 2,
    name: 'burger gourmet',
    description: '+ de 50 burgers différents sur notre carte.',
    image: '../../../public/images/photo-1610440042657-612c34d95e9f.jpeg',
    imageWidth: '853',
    imageHeight: '1280',
    delay: '500',
  },
  {
    id: 3,
    name: 'Crêperie bretonne',
    description: 'Venez découvrir notre crêpe bretonne la spécialité de la maison.',
    image: '../../../public/images/photo-1567620905732-2d1ec7ab7445.jpeg',
    imageWidth: '1059',
    imageHeight: '1280',
    delay: '500',
  },
  {
    id: 4,
    name: "Veggi'fun",
    description:
      'venez découvrir nos merveilleuse salade et autre met, carte totalement végétarienne',
    image: '../../../public/images/photo-1546069901-ba9599a7e63c.jpeg',
    imageWidth: '1280',
    imageHeight: '1280',
    delay: '750',
  },
  {
    id: 5,
    name: 'Tourte-la',
    description: 'venez découvrir la meilleur tourte du monde',
    image: '../../../public/images/photo-1565299624946-b28f40a0ae38.jpeg',
    imageWidth: '1059',
    imageHeight: '1280',
    delay: '750',
  },
  {
    id: 6,
    name: 'glace exotique',
    description: 'Venez découvrir nos plus de 100 parfum de glaces différents',
    image: '../../../public/images/photo-1497034825429-c343d7c6a68f.jpeg',
    imageWidth: '853',
    imageHeight: '1280',
    delay: '750',
  },
  {
    id: 7,
    name: 'new kitchen 2',
    description: 'Venez découvrir tout les plat classique revisité',
    image:
      'https://images.unsplash.com/photo-1559054663-e8d23213f55c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NzgzNjl8MHwxfHNlYXJjaHw0Nnx8Zm9vZHxlbnwwfHx8fDE3ODcxMzExNTh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    imageWidth: '853',
    imageHeight: '1280',
    delay: '1000',
  },
  {
    id: 8,
    name: 'brasserie chaudron',
    description: 'Venez découvrir nos recette traditionnelle',
    image: '../../../public/images/photo-1432139509613-5c4255815697.jpeg',
    imageWidth: '848',
    imageHeight: '1280',
    delay: '1000',
  },
  {
    id: 9,
    name: 'souplette',
    description: 'venez découvrir nos soupe et bouillons',
    image: '../../../public/images/photo-1505253668822-42074d58a7c6.jpeg',
    imageWidth: '853',
    imageHeight: '1280',
    delay: '1000',
  },
])
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
          Nos restaurants partenaire
        </h2>
        <div class="u-expanded-width u-list u-list-1">
          <div class="u-repeater u-repeater-1">
            <div
              v-for="(restaurant, index) in restaurants"
              :key="restaurant.id"
              :class="[
                'u-align-center u-container-align-center u-container-align-center-md u-container-align-center-sm u-container-align-center-xs u-container-style u-list-item u-repeater-item u-shape-rectangle u-video-cover u-white',
                `u-list-item-${index + 1}`,
              ]"
              data-animation-name="customAnimationIn"
              data-animation-duration="1500"
              :data-animation-delay="restaurant.delay"
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
                  :src="restaurant.image"
                  :data-image-width="restaurant.imageWidth"
                  :data-image-height="restaurant.imageHeight"
                />
                <h4 :class="['u-align-center u-text', `u-text-${index * 2 + 2}`]">
                  {{ restaurant.name }}
                </h4>
                <p :class="['u-align-center u-text', `u-text-${index * 2 + 3}`]">
                  {{ restaurant.description }}
                </p>
                <RouterLink to="/dashboard-restaurant">Apprendre encore plus</RouterLink>
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

/* Style de chaque carte individuelle */
.u-section-1 .u-list-item {
  background-color: #ffffff; /* Fond blanc global pour la carte */
  border-radius: 8px; /* Optionnel : arrondit un peu les coins */
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05); /* Légère ombre propre à chaque item */
  margin-bottom: 24px; /* Sépare bien les items entre eux */
}

.u-section-1 [class*='u-container-layout-'] {
  padding: 20px 0 30px; /* Espace dans le bloc blanc sous l'image */
  display: flex;
  flex-direction: column;
}

/* L'image prend toute la largeur en haut */
.u-section-1 [class*='u-image-'] {
  width: 100%;
  height: 278px;
  object-fit: cover;
  margin: 0;
}

.u-section-1 .u-image-1 {
  object-position: 100% 50%;
}

.u-section-1 .u-image-8 {
  object-position: 50%;
}

/* Textes positionnés dans le rectangle blanc en dessous */
.u-section-1 h4 {
  font-weight: 700;
  font-size: 1.625rem;
  margin: 20px 20px 0;
  color: #333;
}

.u-section-1 p {
  margin: 10px 20px 20px;
  font-size: 1rem;
  color: #666;
}

.u-section-1 a {
  margin: 0 20px;
  color: #ff5722;
  font-size: 0.9rem;
  text-decoration: underline;
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
    height: 229px;
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

  .u-section-1 [class*='u-image-'] {
    height: 263px;
  }
}

@media (max-width: 767px) {
  .u-section-1 .u-repeater-1 {
    grid-template-columns: 100%;
    grid-auto-columns: 100%;
  }

  .u-section-1 [class*='u-image-'] {
    height: 395px;
  }
}

@media (max-width: 575px) {
  .u-section-1 .u-text-1 {
    font-size: 2.34375rem;
  }

  .u-section-1 [class*='u-image-'] {
    height: 249px;
  }
}
</style>
