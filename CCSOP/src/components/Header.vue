<script setup>
import LinkHeader from '@/components/LinkHeader.vue'
</script>

<template>
  <header class="u-clearfix u-header u-sticky u-header" id="header">
    <div
      class="u-clearfix u-sheet u-valign-middle-lg u-valign-middle-md u-valign-middle-sm u-valign-middle-xs u-sheet-1"
      style="
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        max-width: 1200px;
        padding: 0 20px;
      "
    >
      <a href="#" class="u-image u-logo u-image-1" style="margin-left: 10px">
        <img alt="logo" src="../../public/images/default-logo.png" class="u-logo-image u-logo-image-1" />
      </a>
      <nav
        class="u-menu u-menu-one-level u-offcanvas u-menu-1"
        role="navigation"
        aria-label="Menu navigation"
      >
        <div class="menu-collapse" style="font-size: 1rem; letter-spacing: 0px">
          <a
            class="u-button-style u-custom-left-right-menu-spacing u-custom-padding-bottom u-custom-top-bottom-menu-spacing u-hamburger-link u-nav-link u-text-active-palette-1-base u-text-hover-palette-2-base"
            href="#"
            tabindex="-1"
            aria-label="Open menu"
            aria-controls="a819"
          >
            <svg class="u-svg-link" viewBox="0 0 24 24">
              <use xlink:href="#menu-hamburger"></use>
            </svg>
            <svg
              class="u-svg-content"
              id="menu-hamburger"
              viewBox="0 0 16 16"
              x="0px"
              y="0px"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g>
                <rect y="1" width="16" height="2"></rect>
                <rect y="7" width="16" height="2"></rect>
                <rect y="13" width="16" height="2"></rect>
              </g>
            </svg>
          </a>
        </div>
        <div class="u-custom-menu u-nav-container">
          <ul class="u-nav u-unstyled u-nav-1" role="menubar" style="display: flex; gap: 20px">
            <LinkHeader></LinkHeader>
          </ul>
        </div>
        <div
          class="u-custom-menu u-nav-container-collapse"
          id="a819"
          role="region"
          aria-label="Menu panel"
        >
          <div
            class="u-black u-container-style u-inner-container-layout u-opacity u-opacity-95 u-sidenav"
          >
            <div class="u-inner-container-layout u-sidenav-overflow">
              <div class="u-menu-close" tabindex="-1" aria-label="Close menu"></div>
              <ul class="u-align-center u-nav u-popupmenu-items u-unstyled u-nav-2" role="menubar">
                <LinkHeader></LinkHeader>
              </ul>
            </div>
          </div>
          <div class="u-black u-menu-overlay u-opacity u-opacity-70"></div>
        </div>
      </nav>
    </div>
  </header>
</template>

<style scoped></style>
