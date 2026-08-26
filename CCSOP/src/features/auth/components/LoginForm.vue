
<script setup>
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useAuthStore } from '../stores/useAuthStore'

const authStore = useAuthStore()
const { message, isError } = storeToRefs(authStore)

const username = ref('')
const password = ref('')

const handleSubmit = () => {
  authStore.login(username.value, password.value)
}
</script>

<template>
  <form @submit.prevent="handleSubmit">
    <input v-model="username" placeholder="Nom d'utilisateur" />
    <input v-model="password" type="password" placeholder="Mot de passe" />
    <button type="submit">Se connecter</button>
  </form>

  <p v-if="message" :style="{ color: isError ? 'red' : 'green' }">
    {{ message }}
  </p>
</template>