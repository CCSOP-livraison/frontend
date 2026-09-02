<script setup>
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useAuthStore } from '../stores/useAuthStore'

const authStore = useAuthStore()
const { message, isError } = storeToRefs(authStore)

const email = ref('')
const password = ref('')

const handleSubmit = () => {
  authStore.login(email.value, password.value)
}
</script>

<template>
  <link
    id="u-page-google-font"
    rel="stylesheet"
    href="https://fonts.googleapis.com/css2?display=swap&amp;family=Roboto:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&amp;family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800"
  />

  <body>
    <section class="u-clearfix u-section-1" id="block-1">
      <div class="u-clearfix u-sheet u-sheet-1">
        <div class="u-form u-form-1">
          <form
            @submit.prevent="handleSubmit"
            class="u-clearfix u-form-spacing-10 u-form-vertical u-inner-form"
            name="form"
            style="padding: 10px"
          >
            <div class="u-form-email u-form-group">
              <label for="email-e981" class="u-label">Courriel</label>
              <input
                v-model="email"
                placeholder="Saisisez votre courriel"
                class="u-input u-input-rectangle"
                required=""
              />
            </div>
            <div class="u-form-group u-form-name">
              <label for="name-e981" class="u-label">Mot de passe</label>
              <input
                v-model="password"
                type="password"
                placeholder="Saisiez votre mot de passe"
                class="u-input u-input-rectangle"
                required=""
              />
            </div>
            <p class="u-form-group u-form-text u-text u-text-1">
              Vous n'avez pas de compte ?
              <RouterLink to="/register">inscrivez-vous</RouterLink>
            </p>
            <div class="u-align-left u-form-group u-form-submit">
              <button
                type="submit"
                style="
                  background-color: #0066cc;
                  color: #ffffff;
                  border: none;
                  padding: 12px 24px;
                  width: 30%;
                  text-align: center;
                  font-size: 16px;
                  font-weight: bold;
                  cursor: pointer;
                "
              >
                Se connecter
              </button>
              <input type="submit" value="submit" class="u-form-control-hidden" />
            </div>
          </form>
          <p v-if="message" :style="{ color: isError ? 'red' : 'green' }">
            {{ message }}
          </p>
        </div>
      </div>
    </section>
  </body>
</template>
<style>
.u-section-1 .u-sheet-1 {
  min-height: 480px;
}

.u-section-1 .u-form-1 {
  height: 241px;
  width: 570px;
  margin: 108px auto 60px;
}

.u-section-1 .u-text-1 {
  margin-left: 0;
}

@media (max-width: 767px) {
  .u-section-1 .u-form-1 {
    width: 540px;
  }
}

@media (max-width: 575px) {
  .u-section-1 .u-form-1 {
    width: 340px;
  }
}
</style>