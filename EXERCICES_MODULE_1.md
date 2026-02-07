# 🎯 Exercices Pratiques - Module 1

Exercices progressifs pour maîtriser Git, HTML, CSS et JavaScript.

---

## 📝 Exercice 1 : Premier Pas avec Git (30 min)

### Objectif
Créer votre premier repository GitHub et y pousser du code.

### Instructions

1. **Créer un compte GitHub**
   - Allez sur https://github.com
   - Créez un compte gratuit
   - Confirmez votre email

2. **Créer un repository**
   - Cliquez sur "New" (bouton vert)
   - Nom : `chatbot-etudiant`
   - Description : "Mon premier chatbot IA"
   - Cochez "Add a README file"
   - Cliquez "Create repository"

3. **Cloner le repository**
   ```bash
   git clone https://github.com/VOTRE-USERNAME/chatbot-etudiant.git
   cd chatbot-etudiant
   ```

4. **Créer la structure**
   ```bash
   mkdir css js data
   touch index.html css/style.css js/app.js
   ```

5. **Faire votre premier commit**
   ```bash
   git add .
   git commit -m "Initial setup: structure de base"
   git push
   ```

### ✅ Vérification
- Allez sur GitHub : vous devriez voir vos fichiers en ligne !

---

## 🎨 Exercice 2 : Personnaliser les Couleurs (20 min)

### Objectif
Modifier le thème de couleurs du chatbot.

### Instructions

1. **Ouvrez `css/style.css`**

2. **Changez les variables CSS** (ligne 12-30)
   ```css
   :root {
       --primary-color: #10b981;      /* Vert émeraude */
       --secondary-color: #3b82f6;    /* Bleu */
       --accent-color: #f59e0b;       /* Orange */
       /* ... */
   }
   ```

3. **Testez dans le navigateur**
   - Ouvrez `index.html`
   - Les couleurs devraient changer !

4. **Commitez vos changements**
   ```bash
   git add css/style.css
   git commit -m "Style: Changement du thème de couleurs"
   git push
   ```

### 🎨 Variantes à Essayer
- **Thème Sombre Rouge** : `#dc2626` (rouge), `#7c2d12` (marron foncé)
- **Thème Pastel** : `#a78bfa` (violet pastel), `#fbbf24` (jaune pastel)
- **Thème Océan** : `#0891b2` (cyan), `#0284c7` (bleu océan)

---

## 💬 Exercice 3 : Ajouter un 4ème Mode (45 min)

### Objectif
Créer un mode "Philosophique" pour le chatbot.

### Instructions

#### Étape 1 : Modifier le HTML

Dans `index.html`, ajoutez un 4ème bouton (ligne ~20) :

```html
<div class="mode-selector">
    <button class="mode-btn active" data-mode="naturel">😊 Naturel</button>
    <button class="mode-btn" data-mode="roast">🔥 Roast</button>
    <button class="mode-btn" data-mode="sympathique">💖 Sympathique</button>
    <button class="mode-btn" data-mode="philosophique">🧘 Philosophique</button>
</div>
```

#### Étape 2 : Modifier le JavaScript

Dans `js/app.js`, ajoutez les réponses philosophiques (ligne ~95) :

```javascript
const responses = {
    naturel: [ /* ... */ ],
    roast: [ /* ... */ ],
    sympathique: [ /* ... */ ],
    philosophique: [
        "Hmm... La connaissance est-elle vraiment accessible ? 🤔",
        "Comme disait Socrate : 'Je sais que je ne sais rien'... 📚",
        "Mais qu'est-ce qu'une question, sinon une quête de sens ? 🧘"
    ]
};
```

#### Étape 3 : Ajouter des réponses spécifiques

```javascript
// Après la ligne 112, ajoutez :
if (msg.includes('sens de la vie')) {
    return mode === 'philosophique'
        ? "Le sens de la vie, c'est peut-être de poser cette question... 🤔"
        : "42, bien sûr ! 😄";
}
```

#### Étape 4 : Tester et Commiter

```bash
git add .
git commit -m "Feature: Ajout du mode philosophique"
git push
```

### ✅ Test
- Cliquez sur "🧘 Philosophique"
- Tapez "Quel est le sens de la vie ?"
- Vérifiez la réponse !

---

## 🌿 Exercice 4 : Travailler avec les Branches (30 min)

### Objectif
Apprendre à utiliser les branches Git.

### Instructions

1. **Créer une branche pour une nouvelle fonctionnalité**
   ```bash
   git checkout -b feature/dark-mode
   ```

2. **Ajouter un bouton de thème sombre** dans `index.html`
   ```html
   <button id="theme-toggle">🌙 Mode Sombre</button>
   ```

3. **Ajouter le CSS** dans `style.css`
   ```css
   body.dark-theme {
       --bg-main: #000000;
       --bg-secondary: #1a1a1a;
       --text-primary: #ffffff;
   }
   ```

4. **Ajouter le JavaScript** dans `app.js`
   ```javascript
   document.getElementById('theme-toggle').addEventListener('click', () => {
       document.body.classList.toggle('dark-theme');
   });
   ```

5. **Commiter sur la branche**
   ```bash
   git add .
   git commit -m "Feature: Mode sombre"
   ```

6. **Fusionner dans main**
   ```bash
   git checkout main
   git merge feature/dark-mode
   git push
   ```

7. **Supprimer la branche**
   ```bash
   git branch -d feature/dark-mode
   ```

---

## 🔍 Exercice 5 : Debug avec la Console (20 min)

### Objectif
Apprendre à déboguer avec les outils de développement.

### Instructions

1. **Ouvrez la console** (F12 ou Clic droit → Inspecter)

2. **Ajoutez des console.log** dans `app.js`
   ```javascript
   function sendMessage() {
       const message = userInput.value.trim();
       console.log('Message envoyé:', message);
       console.log('Mode actuel:', currentMode);
       console.log('Nombre de messages:', chatContainer.children.length);
       // ...
   }
   ```

3. **Testez et observez**
   - Tapez un message
   - Regardez la console
   - Notez les informations affichées

4. **Ajoutez un point d'arrêt (breakpoint)**
   - Dans la console, onglet "Sources"
   - Trouvez `app.js`
   - Cliquez sur le numéro de ligne 80
   - Envoyez un message → le code s'arrête !

### 🎯 Défi
Trouvez combien de messages sont dans le chat en utilisant :
```javascript
console.log('Nombre de messages:', document.querySelectorAll('.message').length);
```

---

## 🎨 Exercice 6 : Animations CSS (45 min)

### Objectif
Ajouter des animations au chatbot.

### Instructions

1. **Animation de chargement**

Dans `style.css`, ajoutez :
```css
.typing-indicator {
    display: flex;
    gap: 5px;
    padding: 10px;
}

.typing-indicator span {
    width: 8px;
    height: 8px;
    background: var(--primary-color);
    border-radius: 50%;
    animation: bounce 1.4s infinite;
}

.typing-indicator span:nth-child(2) {
    animation-delay: 0.2s;
}

.typing-indicator span:nth-child(3) {
    animation-delay: 0.4s;
}

@keyframes bounce {
    0%, 60%, 100% {
        transform: translateY(0);
    }
    30% {
        transform: translateY(-10px);
    }
}
```

2. **Utiliser l'indicateur** dans `app.js`
```javascript
function showTypingIndicator() {
    const indicator = document.createElement('div');
    indicator.className = 'typing-indicator';
    indicator.innerHTML = '<span></span><span></span><span></span>';
    chatContainer.appendChild(indicator);
    
    setTimeout(() => {
        indicator.remove();
    }, 2000);
}
```

3. **Tester**
```bash
git add .
git commit -m "Feature: Animation de saisie"
git push
```

---

## 📊 Exercice 7 : Projet Personnel (2 heures)

### Objectif
Créer votre propre variation du chatbot.

### Idées
1. **Chatbot Cinéma**
   - Modes : Critique, Fan, Spoiler
   - Base de données de films

2. **Chatbot Cuisine**
   - Modes : Chef, Débutant, Healthy
   - Recettes et conseils

3. **Chatbot Sport**
   - Modes : Motivateur, Analyste, Coach
   - Stats et infos sportives

### Exigences
- ✅ Au moins 3 modes différents
- ✅ 10 réponses par mode minimum
- ✅ Design personnalisé
- ✅ 5 commits Git minimum
- ✅ README.md documenté

---

## 🏆 Projet Final Module 1 (3 heures)

### Cahier des Charges

Créez un chatbot complet avec :

#### Fonctionnalités Obligatoires
- [x] 4 modes au minimum
- [x] 20 réponses différentes par mode
- [x] Détection de 5 mots-clés minimum
- [x] Animation de typing indicator
- [x] Bouton pour effacer l'historique
- [x] Mode sombre/clair

#### Design
- [x] Thème de couleurs unique
- [x] Police personnalisée (Google Fonts)
- [x] 3 animations CSS minimum
- [x] Responsive (mobile + desktop)

#### Git
- [x] 10 commits minimum
- [x] 3 branches minimum
- [x] README.md complet
- [x] .gitignore configuré

#### Bonus (+points)
- [ ] Sauvegarder l'historique (localStorage)
- [ ] Exporter la conversation en PDF
- [ ] Mode vocal (Speech API)
- [ ] Easter eggs cachés

### Critères d'Évaluation

| Critère | Points |
|---------|--------|
| Fonctionnalités | 30 |
| Design | 25 |
| Code propre | 20 |
| Git | 15 |
| Créativité | 10 |
| **Total** | **100** |

---

## 📚 Solutions

Les solutions complètes sont disponibles dans le dossier `solutions/` :
- `solutions/exercice-3-mode-philosophique/`
- `solutions/exercice-4-branches/`
- `solutions/exercice-6-animations/`

⚠️ **Essayez de faire les exercices AVANT de regarder les solutions !**

---

## 🎓 Auto-Évaluation

### Je suis capable de :

- [ ] Créer un repository Git
- [ ] Faire des commits réguliers
- [ ] Travailler avec les branches
- [ ] Créer une page HTML structurée
- [ ] Styliser avec CSS et variables
- [ ] Manipuler le DOM en JavaScript
- [ ] Écouter des événements
- [ ] Déboguer avec la console
- [ ] Créer des animations CSS
- [ ] Organiser un projet web

### Si vous avez coché toutes les cases : **Bravo ! Passez au Module 2 ! 🎉**

---

**Bon courage ! 💪**
