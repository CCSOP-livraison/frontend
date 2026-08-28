<script setup>
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useAuthStore } from '../stores/useAuthStore'

const authStore = useAuthStore()
const { message, isError } = storeToRefs(authStore)

const email = ref('')
const password = ref('')

const handleSubmit = () => {
  authStore.register(email.value, password.value)
}
</script>

<template>
  <form @submit.prevent="handleSubmit">
    <input v-model="email" placeholder="Votre Email" />
    <input v-model="password" type="password" placeholder="Mot de passe" />
    <button type="submit">S'enregistrer</button>
  </form>

  <p v-if="message" :style="{ color: isError ? 'red' : 'green' }">
    {{ message }}
  </p>
</template>