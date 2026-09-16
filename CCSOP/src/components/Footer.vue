<template>
  <footer class="aesthetic-footer">
    <div class="footer-container">
      <!-- Section de gauche : Logo et description -->
      <div class="footer-brand">
        <h3 class="brand-title">{{ webSiteName }}<span>.</span></h3>
        <p class="brand-desc">La livraison à domicile social et en circuit-court.</p>
      </div>

      <!-- Section du milieu : Liens rapides -->
      <div class="footer-links">
        <h4>Liens rapides</h4>
        <ul>
          <li><router-link to="/">Accueil</router-link></li>
          <li><router-link to="/contact">Contact</router-link></li>
          <li><router-link to="/terms">Charte d'utilisation</router-link></li>
          <li><router-link to="/general-conditions">Conditions générales</router-link></li>
        </ul>
      </div>

      <!-- Section de droite : Réseaux sociaux -->
      <div class="footer-social">
        <h4>Valeurs</h4>
        <div class="social-icons">
          <a href="https://www.fedlex.admin.ch/eli/cc/2022/491/fr" target="_blank"
            >protection des données</a
          >
        </div>
      </div>
    </div>

    <!-- Barre de copyright -->
    <div class="footer-bottom">
      <p>&copy; {{ currentYear }} {{ webSiteName }}. Tous droits réservés.</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'AestheticFooter',
  data() {
    return {
      currentYear: new Date().getFullYear(),
      webSiteName: 'CCSOP livraison',
    }
  },
}
</script>

<style scoped>
.aesthetic-footer {
  background-color: #0f172a;
  color: #94a3b8;
  padding: 4rem 2rem 2rem;
  font-family: 'Inter', sans-serif;
  border-top: 1px solid #1e293b;
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 3rem;
  margin-bottom: 3rem;
}

.brand-title {
  color: #ffffff;
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.brand-title span {
  color: #6366f1;
}

.brand-desc {
  font-size: 0.95rem;
  line-height: 1.6;
}

.footer-links h4,
.footer-social h4 {
  color: #ffffff;
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 1.2rem;
}

.footer-links ul {
  list-style: none;
  padding: 0;
}

.footer-links li {
  margin-bottom: 0.8rem;
}

.footer-links a,
.social-icons a {
  color: #94a3b8;
  text-decoration: none;
  transition: color 0.3s ease;
  font-size: 0.95rem;
}

.footer-links a:hover,
.social-icons a:hover {
  color: #6366f1;
}

.social-icons {
  display: flex;
  gap: 1.5rem;
}

.footer-bottom {
  max-width: 1200px;
  margin: 0 auto;
  padding-top: 2rem;
  border-top: 1px solid #1e293b;
  text-align: center;
  font-size: 0.85rem;
}
</style>
