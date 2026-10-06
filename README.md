# Touré Ibrahim — Master 1 ERIS

Site de présentation réalisé pour un projet académique à l’ESATIC. L’exercice associe la création d’un site léger à l’apprentissage de Git, puis de GitHub.

## Accéder au projet

- [Dépôt public et historique des commits](https://github.com/ibrahimtoure999999-web/presentation-ibrahim-eris)
- [Site avec GitHub Pages](https://ibrahimtoure999999-web.github.io/presentation-ibrahim-eris/)
- [Guide pour reproduire les étapes Git et GitHub](GUIDE_GIT_GITHUB.md)

GitHub Pages utilise la branche `main` et la racine du dépôt. Les modifications envoyées sur cette branche déclenchent la mise à jour du site.

## Ouvrir le site

Ouvrez `index.html` dans votre navigateur : aucune installation n’est nécessaire. Les images et les styles sont locaux ; le site fonctionne sans connexion Internet. Si le navigateur bloque la copie de commandes, le bouton sélectionne le texte pour une copie manuelle.

Pour un aperçu avec un serveur local, si Python est installé, lancez dans ce dossier :

```powershell
python -m http.server 8080 --bind 127.0.0.1
```

Puis ouvrez http://127.0.0.1:8080. Arrêtez le serveur avec `Ctrl+C`.

## Contenu

- Une présentation de Touré Ibrahim, étudiant en Master 1 ERIS.
- Une section consacrée à sa formation à l’ESATIC.
- Une présentation des rôles de HTML, CSS et JavaScript.
- Cinq étapes interactives pour comprendre Git et GitHub.
- Un bouton de copie des commandes et un menu adapté au téléphone.

## Fichiers

```text
presentation-ibrahim-eris/
├── index.html           # Structure et contenu de la page
├── style.css            # Mise en forme et adaptation aux écrans
├── script.js            # Menu, étapes et copie des commandes
├── assets/              # Images fournies et icône du site
├── GUIDE_GIT_GITHUB.md   # Procédure complète pour le devoir
├── .gitignore           # Fichiers locaux exclus du suivi
├── .gitattributes       # Gestion des fins de ligne
└── .nojekyll            # Publication statique sur GitHub Pages
```

## Git et GitHub : les deux rôles

**Git** suit les versions du code sur l’ordinateur. **GitHub** héberge un dépôt distant, où l’on peut consulter et partager ce code. **GitHub Pages** peut ensuite servir les fichiers HTML, CSS et JavaScript comme un site accessible dans le navigateur.

Suivez [le guide Git et GitHub](GUIDE_GIT_GITHUB.md) pour configurer l’auteur, enregistrer le projet, le pousser sur GitHub et activer GitHub Pages. Les identifiants et adresses d’exemple doivent être remplacés par ceux de votre propre compte.

Le dépôt local livré est initialisé sur `main` et ses commits sont envoyés dans le dépôt public du compte `ibrahimtoure999999-web`. L’adresse d’auteur utilise le format de confidentialité GitHub. Le distant `origin` pointe vers ce dépôt et la branche locale suit `origin/main`. L’archive ZIP contient les sources sans l’historique `.git`, pour reproduire le travail vous-même.

## Vérifications réalisées

La page a été contrôlée dans Microsoft Edge : images chargées, cinq étapes interactives, copie réelle dans le presse-papiers, menu mobile et fermeture avec Échap. Aucun débordement horizontal n’a été constaté à 320, 390, 768 et 1440 pixels. Le guide est disponible, les paragraphes restent accessibles sans JavaScript, et aucune erreur JavaScript ou HTTP n’a été observée pendant ces contrôles.

## Personnaliser

Modifiez les paragraphes dans `index.html`, les couleurs au début de `style.css` et les étapes dans le tableau `steps` de `script.js`. Les textes se limitent aux informations fournies : aucun parcours professionnel, diplôme obtenu ou contact personnel n’a été inventé.

Les trois images ont été fournies pour ce projet : logo ESATIC, affiche Master ERIS et campus. Elles ont été copiées sans modification. Les noms et visuels de l’école sont utilisés pour ce travail académique ; ce site n’est pas un site officiel de l’ESATIC.

## Pour présenter le devoir

1. Montrer la page, y compris son affichage sur téléphone.
2. Expliquer les rôles de HTML, CSS et JavaScript.
3. Montrer `git status` et `git log --oneline` dans le terminal.
4. Expliquer la différence entre un commit local et un push.
5. Montrer le dépôt GitHub après le premier envoi, puis le site publié si GitHub Pages est activé.

## Références officielles

- [Git : enregistrer des modifications](https://git-scm.com/book/fr/v2/Les-bases-de-Git-Enregistrer-des-modifications-dans-le-d%C3%A9p%C3%B4t)
- [GitHub : ajouter un projet local](https://docs.github.com/fr/migrations/importing-source-code/using-the-command-line-to-import-source-code/adding-locally-hosted-code-to-github)
- [GitHub Pages : choisir une source de publication](https://docs.github.com/fr/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)
