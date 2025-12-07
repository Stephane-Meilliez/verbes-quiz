# 📱 Quiz Verbes Irréguliers - Version Mobile (PWA)

Cette version peut s'installer sur téléphone comme une vraie app !

---

## 🚀 Étapes pour mettre en ligne

### Étape 1 : Créer un compte GitHub (si tu n'en as pas)

1. Va sur **https://github.com**
2. Clique **"Sign up"**
3. Entre ton email, crée un mot de passe, choisis un nom d'utilisateur
4. Valide ton email

### Étape 2 : Créer un compte Vercel

1. Va sur **https://vercel.com**
2. Clique **"Sign Up"**
3. Choisis **"Continue with GitHub"**
4. Autorise Vercel à accéder à ton GitHub

### Étape 3 : Préparer les icônes

1. Ouvre le fichier `generate-icons.html` dans ton navigateur (double-clique dessus)
2. Tu verras 2 images
3. Sur chaque image :
   - Clic droit → "Enregistrer l'image sous..."
   - Enregistre dans le dossier `public/` avec le nom exact :
     - `icon-192.png`
     - `icon-512.png`

### Étape 4 : Mettre le projet sur GitHub

**Option A : Via le site GitHub (plus simple)**

1. Va sur **https://github.com/new**
2. Nom du repository : `verbes-quiz`
3. Laisse "Public" coché
4. Clique **"Create repository"**
5. Tu arrives sur une page avec des instructions, ignore-les
6. Clique sur **"uploading an existing file"**
7. Fais glisser TOUS les fichiers et dossiers du projet dans la zone
8. Clique **"Commit changes"**

**Option B : Via ligne de commande (si tu connais)**

```bash
cd verbs-pwa
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/TON_USERNAME/verbes-quiz.git
git push -u origin main
```

### Étape 5 : Déployer sur Vercel

1. Va sur **https://vercel.com/new**
2. Tu vois la liste de tes repos GitHub
3. Trouve **"verbes-quiz"** et clique **"Import"**
4. Laisse tous les paramètres par défaut
5. Clique **"Deploy"**
6. ⏳ Attends 1-2 minutes...
7. 🎉 Tu reçois une URL ! (genre `verbes-quiz.vercel.app`)

---

## 📱 Installer sur téléphone

### Sur iPhone (Safari)

1. Ouvre l'URL dans **Safari** (pas Chrome !)
2. Appuie sur le bouton **Partager** (carré avec flèche)
3. Fais défiler et appuie sur **"Sur l'écran d'accueil"**
4. Appuie sur **"Ajouter"**
5. L'app apparaît sur ton écran d'accueil !

### Sur Android (Chrome)

1. Ouvre l'URL dans **Chrome**
2. Appuie sur les **3 points** en haut à droite
3. Appuie sur **"Ajouter à l'écran d'accueil"** ou **"Installer l'application"**
4. Confirme
5. L'app apparaît sur ton écran d'accueil !

---

## 🔄 Mettre à jour l'app

Si tu modifies le code :

1. Modifie les fichiers sur GitHub (ou pousse avec git)
2. Vercel redéploie automatiquement !
3. Sur le téléphone, ferme et réouvre l'app pour avoir la mise à jour

---

## 💾 Les données

Les scores et utilisateurs sont sauvegardés dans le téléphone.

⚠️ Chaque appareil a ses propres données (pas de sync entre téléphone et PC).

---

## ❓ Problèmes courants

### "L'option Ajouter à l'écran d'accueil n'apparaît pas"
- iPhone : utilise Safari, pas Chrome
- Android : utilise Chrome, pas un autre navigateur
- Vérifie que l'URL est en HTTPS (vercel.app l'est automatiquement)

### "L'app ne se met pas à jour"
- Ferme complètement l'app (pas juste la mettre en arrière-plan)
- Réouvre-la

### "Je veux changer l'URL"
- Dans Vercel > Settings > Domains, tu peux ajouter un domaine personnalisé
- Ou renommer le projet pour changer l'URL vercel.app

---

## 📁 Structure du projet

```
verbs-pwa/
├── public/
│   ├── index.html      # Page HTML principale
│   ├── manifest.json   # Config PWA (nom, icônes, couleurs)
│   ├── icon-192.png    # Icône petite (à générer)
│   └── icon-512.png    # Icône grande (à générer)
├── src/
│   ├── index.js        # Point d'entrée React
│   └── App.js          # L'application complète
├── package.json        # Dépendances
├── generate-icons.html # Outil pour créer les icônes
└── README.md           # Ce fichier
```

---

Bon courage ! 🚀
