<script setup>
import AppFooter from './components/Footer.vue'
import AppHeader from './components/Header.vue'
</script>
<template>
  <div id="app">
    <header>
      <AppHeader />
    </header>
    <main class="main-content">
      <router-view :key="$route.fullPath" />
    </main>
    <footer>
      <AppFooter />
    </footer>
  </div>
</template>
<style scoped>
html,
body {
  margin: 0;
  padding: 0;
  height: 100%;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main-content {
  flex: 1;
}
</style>