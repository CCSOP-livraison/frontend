# CCSOP - frontend INFRASTRUCTURE

**CCSOP**, une plateforme de livraison à domicile après commande auprès de restaurant dévelopé avec Spring Boot.

---

## 📌 Table des Matières

1. [Descriptif du Projet](#descriptif-du-projet)
2. [Choix Technologiques](#choix-technologiques--choix-de-lapproche)
3. [Outils de Développement & Prérequis](#outils-de-développement--prérequis)
4. [Quick Start](#quick-start)
5. [Conception & Modélisation](#conception--modélisation)
6. [Pratiques Git & Commits](#Pratiques-Git--Commits)
7. [Guide utilisateur](#Guide-utilisateur)

---

## Descriptif du Projet

**CCSOP livraison** est une plateforme web pour commander des repas auprès des restaurants partenaires avec livraison.

Un client peut choisir le restaurant dans lequel il souhaite commander et accéder à sa carte dédiée. Une fois sa commande passée, une livraison est automatiquement créée et proposée aux livreurs. La livraison est clôturée dès lors qu'elle est validée à la fois par le livreur et par le client.

---

## Choix Technologiques 
| Domaine | Technologie | Justification |
|---|---|---|

| Langage & Framework | Vue.js 3 | Écosystème mature et largement documenté. |

---

## Outils de Développement & Prérequis

### Recommended IDE Setup
[VS Code](https://code.visualstudio.com/) + [Vue (Official)](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

### Recommended Browser Setup
- Chromium-based browsers (Chrome, Edge, Brave, etc.):
  - [Vue.js devtools](https://chromewebstore.google.com/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd)
  - [Turn on Custom Object Formatter in Chrome DevTools](http://bit.ly/object-formatters)
- Firefox:
  - [Vue.js devtools](https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/)
  - [Turn on Custom Object Formatter in Firefox DevTools](https://fxdx.dev/firefox-devtools-custom-object-formatters/)
---

## Quick Start

```sh
npm install
npm i pinia-plugin-persistedstate
```

### Compile 

```sh
npm run dev
```

---

## Conception & Modélisation

L'ensemble des diagrammes du projet généraux du projet - **modèle conceptuel des données (MCD)**, **planification gantt**, **uses cases** et **diagrammes de séquences** - sont disponibles dans le dossier [`.github/doc`](https://github.com/CCSOP-livraison/.github/tree/main/doc).
Les maquettes utilisés comme base visuelle pour le projet sont disponibles dans le dossier [`.doc/Site1`](https://github.com/CCSOP-livraison/frontend/tree/main/doc/Site1).

---

## Pratiques Git & Commits 

### Stratégie de branches (Git Flow)
Le projet s'est basé sur le modèle **Git Flow**. Pour la description complète du fonctionnement des branches, des règles de fusion et du cycle de vie des releases, référez-vous à la spécification officielle : [A successful Git branching model - nvie.com](https://nvie.com/posts/a-successful-git-branching-model/).

> [!IMPORTANT]
> Une fois qu'une branche `feature/` ou `bugfix/` est testée et fusionnée avec succès sur `develop`, elle doit être supprimée du dépôt distant pour maintenir l'historique propre.

### Conventions de commit (Conventional Commits)
L'équipe applique la spécification [Conventional Commits 1.0.0](https://www.conventionalcommits.org/fr/v1.0.0/). Chaque message de commit doit être préfixé par son type :
- `feat:` : Ajout d'une nouvelle fonctionnalité
- `fix:` : Résolution d'un bug
- `docs:` : Modification de la documentation
- `refactor:` : Modification du code sans changement de comportement (restructuration, renommage)

---

## Guide utilisateur  
### créer une commande
1. Se connecter avec le compte client de **test** suivant ou créer un nouveau compte utilisateur: 
email : camille.petit@example.com
mot de passe : customer123

2. Choisir un restaurant 

3. Aller sur voir la carte 

4. Choisir des plats et valider la commande 

5. Se déconnecter du compte utilisateur 

### s'assigner une livraison
6. Se connecter avec le compte livreur de **test** suivant : 
email : lucas.bernard@example.com
mot de passe : deliver123

7. Cliquer sur la commande créer précédement et se l'assigner
 1. Scénario alternatif (pour simuler une vérification utilisateur de sa commande au moment où la commande est en cours de traitement): 
 2. Se déconnecter 
 3. Se connecter avec le compte de l'utilisateur test camille.petit@example.com  
 4. Aller sur "mes commande"
 5. Voir la commande, et là on peut voir "lucas bernard" comme livreur. 

### Clôturé la livraison
8. Clique sur la commande créer précédement et la valider 

9. Se déconnecter 

10. Se connecter avec le compte de l'utilisateur test camille.petit@example.com  

11. Aller sur "mes commandes"

12. La commande est en état livré et si l'utilisateur la valide elle passe en état terminé.  
