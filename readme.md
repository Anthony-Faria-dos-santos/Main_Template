# Support de developpement et de révision Node.js

## Get Started

- Initilaisation NPM `npm init -y`
- Initialisation de ESlint
  - Installation de façon global du module ESlint
  - Initialisation `eslint --init`
- Créer le fichier permettant de lancer le serveur web `/index.js`
- Créer l'arboresence du projet (Tout en minuscule - en kebab-case ou séparation avec .)
  - app
    - models
    - controllers
    - routers
    - services (les modules qui implémentent la logique métier)
    - middlewares (optionnel)
    - utils (optionnel)
  - data (jsons, script structure sql, script seeding)
  - docs (MCD, briefs, User Stories…)
- Versionning avec GIT `git init` -> (création d'un répertoire caché .git à la racine)
  - création du fichier `.gitignore` qui permet de décider ce qui doit être ou non versionné (en genéral on y ajoute rapidement le répertoire `/node_modules`)
- Installation de modules nécessaires à la mise en place de l'application (Express, dotenv, pg…) `npm i express dotenv`
- Mise en place du serveur web dans `index.js`
- Mise en place des tests unitaires
  - installation de Jest `npm i -g jest` `npm i -D jest`
  - configuration de Jest `jest --init`