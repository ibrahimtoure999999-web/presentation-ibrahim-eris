# Du site local à GitHub, étape par étape

Projet : **Touré Ibrahim — Master 1 ERIS, ESATIC**.

Le site est déjà créé. Ce guide vous permet de reproduire les manipulations, de comprendre leur rôle et d’envoyer le code sur votre propre compte GitHub. Les exemples ci-dessous utilisent PowerShell.

## 1. Vérifier les prérequis et ouvrir le dossier

Il faut Git installé et un compte GitHub pour l’envoi distant. Vérifiez Git :

```powershell
git --version
cd 'F:\Projets\presentation-ibrahim-eris'
```

Si `git` n’est pas reconnu, fermez puis rouvrez le terminal après l’installation de Git. Sur ce poste, l’exécutable est aussi accessible à `C:\Program Files\Git\cmd\git.exe`.

Ouvrez `index.html` pour vérifier la page avant d’enregistrer une version.

## 2. Initialiser Git et configurer l’auteur

Dans un dossier neuf, cette commande crée le dépôt et la branche `main` :

```powershell
git init -b main
```

Si le dossier livré contient déjà `.git`, il est déjà initialisé : ne recréez pas le dépôt. Vérifiez simplement `git status` et `git branch --show-current`. Le ZIP contient les sources sans `.git`, pour pouvoir recommencer l’exercice.

Configurez votre identité **pour ce projet seulement**, sans changer la configuration des autres dépôts :

```powershell
git config user.name "Touré Ibrahim"
git config user.email "VOTRE_ADRESSE_GIT"
```

Remplacez `VOTRE_ADRESSE_GIT` par votre adresse vérifiée sur GitHub ou par l’adresse de confidentialité exacte affichée dans GitHub → Settings → Emails. Cette adresse apparaît dans les commits : utilisez l’adresse de confidentialité si vous ne souhaitez pas partager votre adresse personnelle. Configurer l’auteur n’authentifie pas le compte GitHub.

## 3. Observer et préparer les fichiers

```powershell
git status
git add .
git status
```

`git status` montre les fichiers nouveaux ou modifiés. `git add .` prépare les fichiers du dossier courant pour le prochain commit. Le fichier `.gitignore` exclut certains fichiers générés par l’ordinateur et les éditeurs.

## 4. Enregistrer le premier commit

```powershell
git commit -m "Créer le site de présentation"
git log --oneline
```

Le commit conserve une version du projet. Son message explique ce qui a changé. `git log --oneline` montre l’historique. Si le dépôt livré contient déjà un commit, consultez-le plutôt que de refaire un commit sans modification.

Un commit enregistre des fichiers **sur l’ordinateur** : le code n’est pas encore sur GitHub.

## 5. Créer un dépôt vide sur GitHub

1. Connectez-vous à https://github.com.
2. Cliquez sur **+ → New repository**.
3. Nommez le dépôt `presentation-ibrahim-eris`.
4. Description possible : `Site de présentation de Touré Ibrahim — Master 1 ERIS à l’ESATIC. Projet HTML, CSS, JavaScript, Git et GitHub.`
5. Choisissez la visibilité voulue. Un dépôt public permet au professeur de consulter le code directement. Un dépôt privé demande de donner accès au professeur ; la disponibilité de Pages pour un dépôt privé dépend de l’offre GitHub.
6. Laissez le dépôt **vide** : n’ajoutez pas de README, de .gitignore ou de licence à cette étape. Le projet local contient déjà son README et son .gitignore.
7. Cliquez sur **Create repository** et copiez son URL HTTPS.

## 6. Relier le projet local au dépôt GitHub

Remplacez `VOTRE_IDENTIFIANT` par votre identifiant GitHub réel :

```powershell
git remote add origin https://github.com/VOTRE_IDENTIFIANT/presentation-ibrahim-eris.git
git remote -v
```

`origin` est le nom donné au dépôt distant. `git remote -v` permet de vérifier l’adresse avant tout envoi.

Si `origin` existe déjà, vérifiez d’abord son URL. Seulement si vous devez la corriger, utilisez :

```powershell
git remote set-url origin https://github.com/VOTRE_IDENTIFIANT/presentation-ibrahim-eris.git
```

## 7. Envoyer le code avec push

```powershell
git push -u origin main
```

Authentifiez-vous si Git ouvre une fenêtre ou le navigateur. GitHub n’accepte pas le mot de passe du compte pour les opérations Git en HTTPS : utilisez la connexion proposée par Git Credential Manager, ou un jeton adapté si nécessaire. N’inscrivez jamais un jeton dans les fichiers du projet ou dans l’URL du dépôt.

Rechargez la page du dépôt GitHub. Vous devez retrouver `index.html`, `style.css`, `script.js`, les images et les guides, ainsi que le commit dans l’historique. Ce contrôle confirme l’envoi effectif.

Si l’envoi est refusé parce que le dépôt distant contient déjà des commits, ne forcez pas l’envoi : inspectez l’historique et réconciliez les modifications avant de continuer.

## 8. Publier la page avec GitHub Pages

Le dépôt héberge du code ; cette étape crée l’adresse du site web.

1. Dans le dépôt, ouvrez **Settings → Pages**.
2. Sous **Build and deployment**, choisissez **Deploy from a branch**.
3. Sélectionnez la branche **main** et le dossier **/ (root)**.
4. Cliquez sur **Save**.
5. Attendez la fin du déploiement. Consultez l’adresse indiquée par GitHub Pages, puis vérifiez les images et les interactions.

L’adresse attendue pour ce nom de dépôt est :

```text
https://VOTRE_IDENTIFIANT.github.io/presentation-ibrahim-eris/
```

Cette adresse est un exemple tant que le dépôt et Pages ne sont pas configurés. Les chemins relatifs utilisés dans le site permettent son fonctionnement dans le sous-dossier du dépôt.

## 9. Mettre à jour le projet et montrer un second commit

Modifiez un vrai élément du site, par exemple une phrase de présentation dans `index.html`. Vérifiez la page, puis :

```powershell
git diff
git add index.html
git commit -m "Préciser ma présentation"
git push
git log --oneline
git status
```

`git diff` montre la modification avant de l’enregistrer. Le second commit illustre la progression du projet. `git push` met le dépôt distant à jour. Si Pages utilise `main`, le site est redéployé à partir de cette branche.

Pour une vraie modification de la mise en forme, utilisez par exemple `git add style.css` et un message qui décrit la modification réalisée. Ne créez pas des commits sans changement simplement pour remplir l’historique.

## Les mots à retenir

| Terme | Rôle |
| --- | --- |
| Dossier de travail | Les fichiers que vous modifiez |
| Zone de préparation | Les modifications sélectionnées avec `git add` |
| Commit | Une version enregistrée avec un message |
| Branche | Une ligne d’évolution du projet, ici `main` |
| Remote / origin | L’adresse du dépôt distant |
| Push | L’envoi des commits au dépôt distant |
| GitHub Pages | L’hébergement du site web à partir du dépôt |

## Références officielles

- [Git : les bases](https://git-scm.com/book/fr/v2/Les-bases-de-Git-Enregistrer-des-modifications-dans-le-d%C3%A9p%C3%B4t)
- [GitHub : ajouter du code local](https://docs.github.com/fr/migrations/importing-source-code/using-the-command-line-to-import-source-code/adding-locally-hosted-code-to-github)
- [GitHub : authentification en ligne de commande](https://docs.github.com/fr/authentication/keeping-your-account-and-data-secure/about-authentication-to-github#authenticating-with-the-command-line)
- [GitHub Pages : configurer la publication](https://docs.github.com/fr/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)
