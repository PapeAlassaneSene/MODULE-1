# 🤖 ChatBot Étudiant - Module 1

Bienvenue dans le **Module 1** du projet ChatBot Étudiant ! Ce projet pédagogique vous apprend à créer un chatbot IA en utilisant HTML, CSS, JavaScript et Git.

## 📚 Ce que vous allez apprendre

- ✅ Git et GitHub (versioning, commits, push/pull)
- ✅ Structure HTML5 moderne
- ✅ CSS avec variables et animations
- ✅ JavaScript ES6+ (DOM, événements, fonctions)
- ✅ Organisation d'un projet web

## 🚀 Installation et Démarrage

### Prérequis
- Un navigateur web moderne (Chrome, Firefox, Edge)
- Un éditeur de code (VS Code recommandé)
- Git installé sur votre machine

### Étape 1 : Cloner le projet

```bash
# Cloner votre repository
git clone https://github.com/VOTRE-USERNAME/chatbot-etudiant.git

# Aller dans le dossier
cd chatbot-etudiant
```

### Étape 2 : Créer la structure

```bash
# Créer les dossiers nécessaires
mkdir css js data

# Créer les fichiers
touch index.html
touch css/style.css
touch js/app.js
```

### Étape 3 : Copier les fichiers

Copiez le contenu des fichiers fournis dans le cours :
- `index.html` → racine du projet
- `style.css` → dans le dossier `css/`
- `app.js` → dans le dossier `js/`

### Étape 4 : Tester localement

Deux options :

**Option A : Double-clic**
- Double-cliquez sur `index.html`

**Option B : Live Server (VS Code)**
- Installez l'extension "Live Server"
- Clic droit sur `index.html` → "Open with Live Server"

### Étape 5 : Premier commit Git

```bash
# Ajouter tous les fichiers
git add .

# Créer un commit
git commit -m "Module 1: Structure de base du chatbot"

# Envoyer vers GitHub
git push origin main
```

## 📁 Structure du Projet

```
chatbot-etudiant/
│
├── index.html          # Page principale
├── css/
│   └── style.css      # Styles de l'application
├── js/
│   └── app.js         # Logique JavaScript
├── data/              # (À venir au Module 3)
│   └── students.json
└── README.md          # Ce fichier
```

## 🎯 Fonctionnalités (Module 1)

- [x] Interface de chat moderne
- [x] 3 modes : Naturel, Roast, Sympathique
- [x] Envoi de messages
- [x] Réponses temporaires (sans IA pour l'instant)
- [x] Design responsive
- [x] Animations fluides

## 🧪 Tester le Chatbot

1. Ouvrez `index.html` dans votre navigateur
2. Essayez les 3 modes différents
3. Tapez des messages comme :
   - "Bonjour"
   - "Merci"
   - "Qui es-tu ?"
4. Appuyez sur Entrée ou cliquez sur "Envoyer"

## 🎨 Personnalisation

### Changer les couleurs

Modifiez les variables CSS dans `css/style.css` :

```css
:root {
    --primary-color: #6366f1;  /* Couleur principale */
    --accent-color: #ec4899;   /* Couleur d'accent */
    /* ... */
}
```

### Modifier les réponses temporaires

Dans `js/app.js`, fonction `generateTemporaryResponse()` :

```javascript
const responses = {
    naturel: [
        "Votre message ici...",
        // Ajoutez d'autres réponses
    ],
    // ...
};
```

## 📖 Commandes Git Essentielles

```bash
# Voir l'état actuel
git status

# Ajouter des fichiers modifiés
git add .

# Créer un commit
git commit -m "Description des changements"

# Envoyer vers GitHub
git push

# Récupérer les modifications
git pull

# Voir l'historique
git log --oneline
```

## 🐛 Problèmes Courants

### Le CSS ne s'applique pas
- Vérifiez le chemin : `href="css/style.css"`
- Videz le cache : Ctrl+F5

### Le JavaScript ne fonctionne pas
- Ouvrez la console (F12)
- Vérifiez les erreurs en rouge
- Vérifiez le chemin : `src="js/app.js"`

### Git push ne fonctionne pas
```bash
# Configurez votre identité Git
git config --global user.name "Votre Nom"
git config --global user.email "email@exemple.com"

# Vérifiez la connexion au repository
git remote -v
```

## 🎓 Exercices Pratiques

### Exercice 1 : Personnalisation
- Changez les couleurs du thème
- Modifiez l'emoji du bot
- Ajoutez votre propre message de bienvenue

### Exercice 2 : Git
- Faites 3 commits différents
- Créez une branche `feature/custom-colors`
- Fusionnez-la dans `main`

### Exercice 3 : JavaScript
- Ajoutez un 4ème mode (ex: "Philosophique")
- Créez 3 nouvelles réponses temporaires
- Ajoutez un bouton pour effacer l'historique

## 📚 Ressources Supplémentaires

### Documentation
- [MDN Web Docs](https://developer.mozilla.org/fr/)
- [Git Documentation](https://git-scm.com/doc)
- [JavaScript.info](https://javascript.info/)

### Tutoriels Vidéo
- Git en 30 minutes
- HTML/CSS pour débutants
- JavaScript moderne (ES6+)

## 🔜 Prochaines Étapes

**Module 2 : Interface Avancée**
- Animations CSS avancées
- Design responsive perfectionné
- Indicateurs de saisie ("Bot is typing...")
- Thèmes clair/sombre

**Module 3 : Base de Données**
- Fichier JSON avec données étudiants
- Recherche et filtrage
- Fun facts et anecdotes

**Module 4 : Intégration IA**
- Connexion à Hugging Face API
- Prompts personnalisés par mode
- Réponses intelligentes

**Module 5 : Déploiement**
- Mise en ligne sur GitHub Pages
- Optimisations performance
- Tests finaux

## 💬 Questions et Support

- Consultez le fichier `MODULE_1_Introduction.md` pour le cours complet
- Utilisez la console du navigateur (F12) pour déboguer
- Vérifiez les logs dans la console JavaScript

## 📝 Licence

Ce projet est à but éducatif. Libre d'utilisation pour l'apprentissage.

---

**Made with ❤️ pour l'apprentissage du développement web**

Bon courage pour votre projet ! 🚀
