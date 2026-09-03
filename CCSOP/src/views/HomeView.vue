<script setup>
</script>

<template>
  <div
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
          Bienvenue sur notre plateforme
        </h2>
        <div class="u-expanded-width u-list u-list-1">
          <div class="u-repeater u-repeater-1">
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
}

.u-section-1 [class*='u-container-layout-'] {
  padding: 20px 0 30px;
  display: flex;
  flex-direction: column;
}

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
