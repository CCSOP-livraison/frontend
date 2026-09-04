<script setup>
import { ref } from 'vue'
import { useAuthStore } from '../stores/useAuthStore'
import router from '@/router'

const authStore = useAuthStore()

const firstname = ref('')
const Name = ref('')
const street = ref('')
const city = ref('')
const zipcode = ref('')
const phone = ref('')
const email = ref('')
const password = ref('')

const handleSubmit = () => {
  authStore.register(
    firstname.value,
    Name.value,
    street.value,
    city.value,
    zipcode.value,
    phone.value,
    email.value,
    password.value,
  )
  router.push('/dashboard-customer')
}
</script>

<template>
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
            <div class="u-form-group u-form-name u-form-partition-factor-2 u-form-group-1">
              <label for="first-name-85b7" class="u-label">Prénom</label>
              <input
                v-model="firstname"
                placeholder="Saisir votre Prénom"
                name="name-1"
                class="u-input u-input-rectangle"
                required=""
              />
            </div>
            <div class="u-form-group u-form-name u-form-partition-factor-2 u-form-group-2">
              <label for="last-name-85b7" class="u-label">Nom</label>
              <input
                v-model="Name"
                placeholder="Saisir votre Nom"
                name="name"
                class="u-input u-input-rectangle"
                required=""
              />
            </div>
            <div class="u-form-group u-form-group-3">
              <label for="street-5a71" class="u-label">Rue</label>
              <input
                v-model="street"
                placeholder="Saisir votre rue"
                name="street"
                class="u-input u-input-rectangle"
              />
            </div>
            <div class="u-form-group u-form-partition-factor-2 u-form-group-4">
              <label for="city-5a71" class="u-label">Ville</label>
              <input
                v-model="city"
                placeholder="Saisir votre ville"
                name="city"
                class="u-input u-input-rectangle"
              />
            </div>
            <div class="u-form-group u-form-partition-factor-2 u-form-group-5">
              <label for="zip-5a71" class="u-label">Code postal</label>
              <input
                v-model="zipcode"
                placeholder="Saisir votre code postal"
                name="zipcode"
                class="u-input u-input-rectangle"
              />
            </div>
            <div class="u-form-group u-form-phone u-form-group-6">
              <label for="phone-d0d0" class="u-label">Téléphone</label>
              <input
                v-model="phone"
                placeholder="Saisir votre téléphone (par ex +330600000000)"
                name="phone"
                class="u-input u-input-rectangle"
                required=""
              />
            </div>
            <div class="u-form-email u-form-group">
              <label for="email-e981" class="u-label">Mail</label>
              <input
                v-model="email"
                type="email"
                placeholder="Saisissez votre courriel"
                class="u-input u-input-rectangle"
                required=""
              />
            </div>
            <div class="u-form-group u-form-name">
              <label for="name-e981" class="u-label">Mot de passe</label>
              <input
                v-model="password"
                type="password"
                placeholder="Saisissez votre mot de passe"
                class="u-input u-input-rectangle"
                required=""
              />
            </div>
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
                S'enregistrer
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  </body>
</template>

<style scoped>
.u-section-1 .u-sheet-1 {
  min-height: 1107px;
}

.u-section-1 .u-form-1 {
  height: 750px;
  width: 570px;
  margin: 162px auto 60px;
}

.u-section-1 .u-form-group-1,
.u-section-1 .u-form-group-2,
.u-section-1 .u-form-group-3,
.u-section-1 .u-form-group-4,
.u-section-1 .u-form-group-5,
.u-section-1 .u-form-group-6 {
  margin-left: 0;
}

.u-section-1 {
  margin-left: auto;
  margin-right: auto;
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
