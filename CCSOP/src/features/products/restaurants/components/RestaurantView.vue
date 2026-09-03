<script setup>
import { ref } from 'vue'

const restaurant = ref({
  id: 1,
  name: 'casa bianca',
  description:
    ' Lorem Ipsum&nbsp;is simply dummy text of the printing and typesetting industry. Lorem\n' +
    "          Ipsum has been the industry's standard dummy text ever since 1966, when designers at\n" +
    '          Letraset and James Mosley, the librarian at St Bride Printing Library in London, took a\n' +
    "          1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type\n" +
    '          sheets. It has survived not only many decades, but also the leap into electronic\n' +
    '          typesetting, remaining essentially unchanged. It was popularised thanks to these sheets\n' +
    '          and more recently with desktop publishing software like Aldus PageMaker and Microsoft Word\n' +
    '          including versions of Lorem Ipsum.Lorem Ipsum&nbsp;is simply dummy text of the printing\n' +
    "          and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever\n" +
    '          since 1966, when designers at Letraset and James Mosley, the librarian at St Bride\n' +
    '          Printing Library in London, took a 1914 Cicero translation and scrambled it to make dummy\n' +
    "          text for Letraset's Body Type sheets. It has survived not only many decades, but also the\n" +
    '          leap into electronic typesetting, remaining essentially unchanged. It was popularised\n' +
    '          thanks to these sheets and more recently with desktop publishing software like Aldus\n' +
    '          PageMaker and Microsoft Word including versions of Lorem Ipsum.',
  resume: 'Casa bianca, le buffet de pâtes de vos rêves',
  image: '../../../public/images/photo-1473093295043-cdd812d0e601.jpeg',
  imageWidth: '1280',
  imageHeight: '854',
  delay: '500',
})
</script>

<template>
  <body
    data-path-to-root="../"
    data-include-products="false"
    class="u-body u-clearfix u-xl-mode"
    data-lang="fr"
  >
    <section class="u-clearfix u-grey-80 u-section-1" id="block-3">
      <div class="u-clearfix u-sheet u-sheet-1">
        <div class="u-restaurant-layout">

          <div class="u-column-left">
            <img
              class="u-expanded-width-xs u-image u-image-default u-image-1"
              :src="restaurant.image"
              alt=""
              :data-image-width="restaurant.imageWidth"
              :data-image-height="restaurant.imageHeight"
            />
            <p class="u-text u-text-4">{{ restaurant.resume }}</p>
            <div class="u-btn-container">
              <a
                href="#"
                class="u-btn u-btn-round u-button-style u-hover-palette-1-light-1 u-palette-1-base u-radius u-btn-1"
                >modifier la carte</a
              >
              <RouterLink
                class="u-btn u-btn-round u-button-style u-hover-palette-1-light-1 u-palette-1-base u-radius u-btn-2"
                to="/menu"
                >voir la carte</RouterLink
              >
            </div>
          </div>


          <div class="u-column-right">
            <h1 class="u-text u-text-1">{{ restaurant.name }}</h1>
            <p class="u-text u-text-3">{{ restaurant.description }}</p>
          </div>
        </div>
      </div>
    </section>
  </body>
</template>

<style scoped>
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

.u-section-1 .u-btn-1,
.u-section-1 .u-btn-2 {
  --radius: 50px;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 0.875rem;
  letter-spacing: 1px;
  padding: 9px 34px 11px 33px;
  margin: 0;
}


@media (max-width: 991px) {
  .u-section-1 .u-restaurant-layout {
    grid-template-columns: 1fr;
    gap: 30px;
  }
}
</style>
