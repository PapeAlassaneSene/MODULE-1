# Module 1 : Introduction et Setup 🚀

## Objectifs d'apprentissage
À la fin de ce module, vous serez capable de :
- ✅ Comprendre Git et GitHub
- ✅ Créer un repository et faire des commits
- ✅ Structurer un projet web HTML/CSS/JS
- ✅ Comprendre les bases des LLM gratuits

---

## Partie 1 : Introduction à Git et GitHub (45 min)

### 🎯 Qu'est-ce que Git ?
Git est un système de **contrôle de version** qui permet de :
- Sauvegarder l'historique de votre code
- Travailler en équipe sans conflits
- Revenir à une version précédente si nécessaire

### 🎯 Qu'est-ce que GitHub ?
GitHub est une plateforme en ligne qui :
- Héberge vos repositories Git
- Permet de collaborer avec d'autres développeurs
- Offre l'hébergement gratuit de sites web (GitHub Pages)

### 📝 Commandes Git Essentielles

```bash
# Configurer Git (à faire une seule fois)
git config --global user.name "Votre Nom"
git config --global user.email "votre.email@exemple.com"

# Initialiser un nouveau projet
git init

# Ajouter des fichiers au suivi
git add .                    # Ajoute tous les fichiers
git add index.html          # Ajoute un fichier spécifique

# Sauvegarder les modifications (commit)
git commit -m "Message descriptif"

# Voir l'état actuel
git status

# Voir l'historique
git log

# Connecter à GitHub
git remote add origin https://github.com/votre-username/nom-repo.git

# Envoyer vers GitHub
git push -u origin main

# Récupérer les modifications
git pull
```

### 🏗️ Structure du Projet

```
chatbot-etudiant/
│
├── index.html          # Page principale
├── css/
│   └── style.css      # Styles
├── js/
│   ├── app.js         # Logique principale
│   └── data.js        # Données des étudiants
├── data/
│   └── students.json  # Base de données
└── README.md          # Documentation
```

---

## Partie 2 : HTML de Base (30 min)

### 🎯 Structure HTML5

HTML (HyperText Markup Language) est le squelette de toute page web.

**Concepts clés :**
- **Balises** : `<div>`, `<p>`, `<h1>`, etc.
- **Attributs** : `class`, `id`, `data-*`
- **Sémantique** : `<header>`, `<main>`, `<footer>`

### 📝 Exemple : Structure de notre Chatbot

```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ChatBot Étudiant</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <!-- En-tête -->
    <header>
        <h1>🤖 ChatBot Étudiant</h1>
    </header>

    <!-- Zone principale -->
    <main>
        <div id="chat-container">
            <!-- Les messages apparaîtront ici -->
        </div>
        
        <!-- Zone de saisie -->
        <div id="input-area">
            <input type="text" id="user-input" placeholder="Pose ta question...">
            <button id="send-btn">Envoyer</button>
        </div>
    </main>

    <script src="js/app.js"></script>
</body>
</html>
```

---

## Partie 3 : JavaScript Essentials (45 min)

### 🎯 Variables et Types de Données

```javascript
// Variables (ES6+)
let message = "Bonjour";           // Variable modifiable
const PI = 3.14159;                // Constante
var ancien = "À éviter";           // Ancienne syntaxe

// Types de données
let nombre = 42;                   // Number
let texte = "Hello";               // String
let estVrai = true;                // Boolean
let tableau = [1, 2, 3];          // Array
let objet = { nom: "Jean" };      // Object
```

### 🎯 Manipulation du DOM

Le DOM (Document Object Model) permet de modifier la page web.

```javascript
// Sélectionner des éléments
const titre = document.getElementById('titre');
const boutons = document.querySelectorAll('.btn');
const premier = document.querySelector('.item');

// Modifier le contenu
titre.textContent = "Nouveau titre";
titre.innerHTML = "<strong>Titre en gras</strong>";

// Modifier les styles
titre.style.color = "blue";
titre.classList.add('actif');

// Écouter des événements
bouton.addEventListener('click', function() {
    console.log('Bouton cliqué !');
});
```

### 🎯 Fonctions

```javascript
// Fonction classique
function saluer(nom) {
    return "Bonjour " + nom;
}

// Fonction fléchée (ES6+)
const saluer = (nom) => {
    return `Bonjour ${nom}`;
};

// Fonction fléchée courte
const doubler = (x) => x * 2;

// Utilisation
console.log(saluer("Marie"));  // "Bonjour Marie"
console.log(doubler(5));        // 10
```

---

## Partie 4 : Introduction aux LLM Gratuits (30 min)

### 🎯 Qu'est-ce qu'un LLM ?

Un **LLM** (Large Language Model) est un modèle d'IA capable de :
- Comprendre et générer du texte naturel
- Répondre à des questions
- Créer du contenu personnalisé

### 🎯 Options Gratuites pour notre Chatbot

#### Option 1 : **Hugging Face Inference API** (Recommandé pour débuter)
- ✅ Gratuit avec limites raisonnables
- ✅ Facile à utiliser
- ✅ Nombreux modèles disponibles
- ⚠️ Nécessite une clé API gratuite

#### Option 2 : **Groq** (Le plus rapide)
- ✅ Ultra-rapide
- ✅ Gratuit avec quota généreux
- ✅ API simple
- ⚠️ Nécessite inscription

#### Option 3 : **Ollama** (100% local)
- ✅ Totalement gratuit
- ✅ Fonctionne hors ligne
- ✅ Confidentialité totale
- ⚠️ Nécessite installation locale

Pour ce cours, nous utiliserons **Hugging Face** car c'est le plus accessible pour débuter.

### 🎯 Exemple d'Appel API Simple

```javascript
async function appelLLM(message) {
    const response = await fetch('URL_API', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer VOTRE_CLE'
        },
        body: JSON.stringify({
            inputs: message
        })
    });
    
    const data = await response.json();
    return data;
}
```

*Nous verrons les détails au Module 4*

---

## 🎯 Exercice Pratique : Setup Initial

### Mission 1 : Créer votre Repository GitHub

1. **Créer un compte GitHub** (si pas déjà fait)
   - Allez sur https://github.com
   - Cliquez sur "Sign up"

2. **Créer un nouveau repository**
   - Cliquez sur le bouton "New" (vert)
   - Nom : `chatbot-etudiant`
   - Description : "Chatbot IA pour découvrir les étudiants"
   - Cochez "Add a README file"
   - Cliquez "Create repository"

3. **Cloner le repository localement**
   ```bash
   git clone https://github.com/VOTRE-USERNAME/chatbot-etudiant.git
   cd chatbot-etudiant
   ```

### Mission 2 : Créer la Structure de Base

1. **Créer les dossiers**
   ```bash
   mkdir css js data
   ```

2. **Créer les fichiers**
   - `index.html` (copier le code HTML ci-dessus)
   - `css/style.css` (vide pour l'instant)
   - `js/app.js` (vide pour l'instant)

3. **Premier commit**
   ```bash
   git add .
   git commit -m "Initial setup: structure de base du projet"
   git push
   ```

### Mission 3 : Tester Localement

1. **Ouvrir `index.html` dans votre navigateur**
   - Double-cliquez sur le fichier
   - OU utilisez Live Server dans VS Code

2. **Vérifier que la page s'affiche**
   - Vous devriez voir le titre "ChatBot Étudiant"

---

## 📚 Ressources Complémentaires

### Documentation
- [Git Documentation](https://git-scm.com/doc)
- [MDN Web Docs](https://developer.mozilla.org/fr/)
- [Hugging Face](https://huggingface.co/)

### Tutoriels Vidéo
- Git en 30 minutes (chercher sur YouTube)
- JavaScript pour débutants
- HTML/CSS Crash Course

---

## ✅ Quiz de Fin de Module

1. Quelle commande Git permet de sauvegarder vos modifications ?
2. Quelle balise HTML définit le titre principal d'une page ?
3. Comment sélectionner un élément par son ID en JavaScript ?
4. Quelle est la différence entre `let` et `const` ?
5. Qu'est-ce qu'un LLM ?

**Réponses en bas de page**

---

## 🎯 Prochaine Étape

Au **Module 2**, nous allons :
- Créer une interface de chat magnifique avec CSS
- Ajouter des animations fluides
- Rendre l'interface responsive

---

## Solutions Quiz

1. `git commit -m "message"`
2. `<h1>`
3. `document.getElementById('id')`
4. `let` = variable modifiable, `const` = constante
5. Large Language Model - Modèle de langage IA
