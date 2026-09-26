# Projet 1 - starship

## Mise en place du TP

  Cette mise en place est similaire à celle du TP précédent. Le dossier `tp3` contient une structure telle que celle décrite dans ce [document](https://www.fil.univ-lille.fr/~routier/enseignement/licence/js-s4/html/template-app.html).  
  
  1. Dans le dossier `tp3/` exécutez
```bash  	  
tp3$  npm install
```  
  2. Exécutez la commande `npm run build` pour créer le dossier `./dist/` et construire un premier *bundle*
  3. Vous pouvez ouvrir le fichier `dist/index.html`, pour vérifier que tout s'est bien déroulé en consultant la console (<kbd>Ctrl Shift K</kbd>) dans laquelle vous devez lire le message `le bundle a été généré`.  

  >  Attention, le résultat <strong>ne se consulte pas</strong> avec le fichier `src/index.html` : vous devez faire vos modifications et votre travail dans le dossier `src/` **mais le résultat du travail est observé dans le dossier `dist/`**.

  4.	Pendant le TP vous devrez compléter ou créer les modules JavaScript demandés.  
    Comme dans le TP précédent, profitez des facilités offertes par Webpack pendant la phase de développement pour construire le bundle et visualiser les résultats "à chaud" en démarrant le serveur de développement :Après chaque modification, il faut générer le <q>nouveau</q> <i>bundle</i>, toujours à l'aide de la commande <code>npm run build</code> et c'est le fichier **`dist`**`/index.html` qu'il faut consulter pour avoir le résultat

```bash
tp3$  npm run dev-server
```

  **C'est la solution que l'on vous conseille d'adopter.**

  5. N'oubliez pas d'exécuter la commande <code>npm run build</code> après l'arrêt du serveur de développement pour mettre à jour le dossier `dist/`.

> NB : le dossier `dist/` ne sera pas mis sur le dépôt car il peut être regénéré à partir des sources.

## Votre travail :

### Description

Jeu en JavaScript où le joueur contrôle un panier pour attraper des œufs et éviter des fusées.

+100 points par œuf attrapé
-500 points et une vie en moins si touché par une fusée
Le jeu s’arrête après 3 collisions avec des fusées

###  Installation
1. Cloner le projet :
```bash
git clone git@gitlab-etu.fil.univ-lille.fr:yanni.moutchou.etu/tp-js-s4-25-26.git
```
2. acceder au dossier tp3 :
```bash
cd tp3
```
3. Installer les dépendances :
```bash
npm install
```
### Lancer le projet
Démarrer le serveur de développement :
```bash
npm run dev-server
```

### Build du projet
Pour générer le bundle :
```bash
npm run build
```
### Contrôles
Flèches du clavier → déplacer le panier

### Structure
- `Game` : gère le jeu (animation, score, événements)
- `Mobile` : classe de base pour les objets mobiles
- `Basket` : panier contrôlé par le joueur 
- `Egg` : objets à attraper
- `Rocket` : obstacles à éviter
- `keyManager` : pour gerer le clavier

> Remarques : Les œufs apparaissent aléatoirement (timer + probabilité) Les fusées apparaissent également aléatoirement
Gestion des collisions implémentée entre tous les objets
