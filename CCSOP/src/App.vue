<script setup>
import { ref } from 'vue'
import axios from 'axios'

const username = ref('')
const password = ref('')
const message = ref('')
const isError = ref(false)

const login = async () => {
  try {
    // Construction du header HTTP Basic (Base64)
    const token = btoa(`${username.value}:${password.value}`)

    const response = await axios.get('http://localhost:8080/api/login', {
      headers: {
        'Authorization': `Basic ${token}`
      }
    })

    message.value = response.data.message
    isError.value = false
  } catch (err) {
    message.value = "Échec de l'authentification (401 Unauthorized)"
    isError.value = true
  }
}
</script>

<template>
  <div style="padding: 20px;">
    <h2>Test d'authentification de base</h2>
    <form @submit.prevent="login">
      <input v-model="username" placeholder="Nom d'utilisateur" />
      <input v-model="password" type="password" placeholder="Mot de passe" />
      <button type="submit">Se connecter</button>
    </form>

    <p v-if="message" :style="{ color: isError ? 'red' : 'green' }">
      {{ message }}
    </p>
  </div>
</template>
