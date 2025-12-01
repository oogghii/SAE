# 💻 SAE Web - [ RAPHAEL | WENDY | VICTORIEN | ALEXEÏ ]

Bienvenue sur le dépôt du projet.
**Objectif :** Rendre avant 18h un site web quali de bz
**Règle d'or :** ON COMMUNIQUE AVANT D'ENVOYER DU CODE!!!!!!!!!!!

---

## 🚀 Installation (Premier lancement)

1. Ouvrez **VS Code**.
2. Ouvrez un **dossier vide** sur votre ordinateur.
3. Ouvrez le terminal (`Ctrl` + `ù`) et copiez :

```bash
git clone https://github.com/oogghii/SAE.git .
````

*(N'oubliez pas le point à la fin pour cloner dans le dossier courant)*

-----

## 🔄 La Boucle de Travail (À respecter strictement)

Répétez ces étapes pour **chaque** nouvelle tâche (ex: faire le footer, corriger une couleur, etc.).

### 1️⃣ Avant de RAJOUTER UN TRUC (OBLIGATOIRE)

Récupérez toujours la dernière version du site pour éviter les conflits, la commande ci-dessous met à jour votre dossier avec la derniere MAJ

```bash
git pull
```

### 2️⃣ Codez votre fonctionnalité

Travaillez sur vos fichiers. Sauvegardez régulièrement (`Ctrl` + `S`).
*Testez votre code sur navigateur avant de passer à la suite \!*

### 3️⃣ Une fois la tâche finie (GENRE CA MARCHE VRAIMENT EN LOCAL)

Ajoutez vos fichiers à la zone de validation : (visuellement ils y sont déjà mais faut que GIT comprenne)

```bash
git add .
```
*(N'oubliez pas le point à la fin pour cloner dans le dossier courant)*

### 4️⃣ Validez votre travail

Créez le point de sauvegarde avec un message **clair** (pas de "modif" hein ALEXEI, soyez précis SVP, demandez à chatgpt si vraiment vous avez la flemme).

```bash
git commit -m "explication de votre changement"
```

Exemple :

```bash
git commit -m "Ajout de la section contact et du formulaire + Ajout du Footer"
```

### 5️⃣ Envoyez aux autres

```bash
git push
```

POUR PUSH ET CREER UNE BRANCHE (vous pouvez le faire sur le site) :

```bash
git push -u origin "nom de la branche"
```

*(⚠️ Si ça bloque en rouge : faites `git pull`, réglez les conflits si besoin, puis refaites `git push`)*

-----

## 📂 Organisation des fichiers (Anti-conflits)

Pour éviter de s'écraser le travail les uns les autres :

  * **HTML** : Ne touchez pas aux pages gérées par les autres.
  * **CSS** :
      * `style.css` : Uniquement pour les imports et règles globales (reset, variables).
      * Créez vos propres fichiers CSS dans le dossier `/css` (ex: `header.css`, `page-accueil.css`) et importez-les dans `style.css`.
  * **Images** : Tout dans le dossier `/assets/img`.

-----

## 🆘 En cas de panique

Si Git affiche des erreurs de **"Merge Conflict"** :

1.  Ne paniquez pas.
2.  Ne forcez rien.
3.  Prevenez Raph le goat
