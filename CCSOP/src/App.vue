<script setup>
import AppFooter from './components/Footer.vue'
import AppHeader from './components/Header.vue'
</script>
<template>
  <AppHeader />
  <router-view :key="$route.fullPath" />
  <AppFooter />
</template>