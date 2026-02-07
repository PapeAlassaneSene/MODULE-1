# 📋 Git Cheat Sheet - Antisèche Git

Guide de référence rapide pour les commandes Git essentielles.

## 🎯 Configuration Initiale

```bash
# Configurer votre nom (à faire une seule fois)
git config --global user.name "Votre Nom"

# Configurer votre email
git config --global user.email "votre.email@exemple.com"

# Vérifier la configuration
git config --list
```

## 🚀 Démarrer un Projet

### Nouveau projet local
```bash
# Initialiser Git dans un dossier existant
cd mon-projet
git init

# Premier commit
git add .
git commit -m "Initial commit"
```

### Cloner un projet existant
```bash
# Cloner depuis GitHub
git clone https://github.com/username/nom-projet.git

# Cloner dans un dossier spécifique
git clone https://github.com/username/nom-projet.git mon-dossier
```

## 📝 Workflow Quotidien

```bash
# 1. Voir l'état actuel (fichiers modifiés, ajoutés, etc.)
git status

# 2. Ajouter des fichiers au staging
git add fichier.html              # Un fichier spécifique
git add .                         # Tous les fichiers
git add *.js                      # Tous les fichiers .js

# 3. Créer un commit (sauvegarder les changements)
git commit -m "Description claire des changements"

# 4. Envoyer vers GitHub
git push

# 5. Récupérer les dernières modifications
git pull
```

## 🌿 Branches

```bash
# Voir toutes les branches
git branch

# Créer une nouvelle branche
git branch ma-nouvelle-branche

# Changer de branche
git checkout ma-nouvelle-branche

# Créer ET changer de branche en une commande
git checkout -b ma-nouvelle-branche

# Fusionner une branche dans la branche actuelle
git merge nom-branche

# Supprimer une branche locale
git branch -d nom-branche
```

## 🔍 Historique et Information

```bash
# Voir l'historique des commits
git log

# Historique simplifié (une ligne par commit)
git log --oneline

# Historique avec graphique
git log --oneline --graph --all

# Voir les différences non commitées
git diff

# Voir les informations du dernier commit
git show
```

## ↩️ Annuler des Changements

```bash
# Annuler les modifications d'un fichier (avant git add)
git checkout -- fichier.html

# Retirer un fichier du staging (après git add)
git reset fichier.html

# Annuler le dernier commit (garde les changements)
git reset --soft HEAD~1

# Annuler le dernier commit (supprime les changements)
git reset --hard HEAD~1

# ⚠️ DANGER : Revenir à un commit spécifique (perd tout)
git reset --hard <hash-du-commit>
```

## 🔗 Connexion avec GitHub

```bash
# Lier un projet local à GitHub
git remote add origin https://github.com/username/nom-projet.git

# Voir les repositories distants
git remote -v

# Changer l'URL du remote
git remote set-url origin https://github.com/username/nouveau-nom.git

# Premier push vers GitHub
git push -u origin main

# Push suivants
git push
```

## 📦 Commandes Avancées

```bash
# Sauvegarder temporairement des changements
git stash

# Récupérer les changements sauvegardés
git stash pop

# Voir la liste des stash
git stash list

# Renommer le dernier commit
git commit --amend -m "Nouveau message"

# Ajouter des fichiers au dernier commit
git add fichier-oublie.js
git commit --amend --no-edit

# Cloner uniquement la branche principale (plus rapide)
git clone --single-branch https://github.com/username/projet.git
```

## 🏷️ Tags (Versions)

```bash
# Créer un tag
git tag v1.0.0

# Créer un tag avec message
git tag -a v1.0.0 -m "Version 1.0.0"

# Voir tous les tags
git tag

# Pousser les tags vers GitHub
git push --tags
```

## 🔧 Résolution de Problèmes

### Erreur : "fatal: not a git repository"
```bash
# Solution : Vous n'êtes pas dans un dossier Git
# Soit initialisez Git :
git init
# Soit allez dans le bon dossier :
cd chemin/vers/votre/projet
```

### Erreur : "Please tell me who you are"
```bash
# Solution : Configurez votre identité
git config --global user.name "Votre Nom"
git config --global user.email "email@exemple.com"
```

### Erreur : Conflit lors d'un merge
```bash
# 1. Ouvrez les fichiers en conflit
# 2. Cherchez les marqueurs <<<<<<<, =======, >>>>>>>
# 3. Résolvez manuellement
# 4. Puis :
git add .
git commit -m "Résolution des conflits"
```

### Erreur : "Your branch is ahead of 'origin/main'"
```bash
# Solution : Vous avez des commits non poussés
git push
```

### Erreur : "Your branch is behind 'origin/main'"
```bash
# Solution : Récupérez les dernières modifications
git pull
```

## 💡 Bonnes Pratiques

### Messages de Commit
```bash
# ✅ BON
git commit -m "Ajout de la fonction de recherche"
git commit -m "Fix : Correction bug affichage mobile"
git commit -m "Style : Amélioration du design du header"

# ❌ MAUVAIS
git commit -m "update"
git commit -m "fix"
git commit -m "oops"
```

### Fréquence des Commits
- Commitez souvent (petits changements logiques)
- Un commit = une fonctionnalité/correction
- Ne commitez pas de code cassé

### Branches
```bash
# Conventions de nommage
feature/nouvelle-fonctionnalité
fix/correction-bug
style/amelioration-design
docs/mise-a-jour-readme
```

## 🎓 Workflow Git Recommandé

```bash
# 1. Récupérer les dernières modifications
git pull

# 2. Créer une branche pour votre travail
git checkout -b feature/ma-fonctionnalité

# 3. Travailler sur votre code
# ... éditer les fichiers ...

# 4. Voir ce qui a changé
git status
git diff

# 5. Ajouter et commiter
git add .
git commit -m "Description claire"

# 6. Pousser la branche
git push -u origin feature/ma-fonctionnalité

# 7. Retourner sur main et fusionner
git checkout main
git merge feature/ma-fonctionnalité

# 8. Pousser vers GitHub
git push

# 9. Supprimer la branche (optionnel)
git branch -d feature/ma-fonctionnalité
```

## 🆘 Commandes d'Urgence

```bash
# J'ai tout cassé, revenir au dernier commit
git reset --hard HEAD

# J'ai modifié le mauvais fichier
git checkout -- fichier-a-restaurer.html

# J'ai commit trop tôt, j'ajoute un fichier
git add fichier-oublie.js
git commit --amend --no-edit

# J'ai fait un commit sur la mauvaise branche
git log  # Copiez le hash du commit
git checkout bonne-branche
git cherry-pick <hash-du-commit>
```

## 📚 Ressources

- [Documentation Git officielle](https://git-scm.com/doc)
- [GitHub Guides](https://guides.github.com/)
- [Git Visualizer](https://git-school.github.io/visualizing-git/)
- [Learn Git Branching](https://learngitbranching.js.org/)

---

**💡 Astuce** : Imprimez cette fiche et gardez-la près de votre ordinateur ! 🖨️
