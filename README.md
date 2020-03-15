# Environnement de développement Docker
*écrit et mis en place par Antoine POIRIER et Siloé RABADAN*

Le but de ce projet est de monter un environnement de développement Docker en utilisant des technologies que nous utilisons.
Nous avons utilisé ces technologies :
![mongo_img](https://upload.wikimedia.org/wikipedia/fr/thumb/4/45/MongoDB-Logo.svg/1200px-MongoDB-Logo.svg.png)
![express_img](https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png)
![svelte_img](https://cdn.svgporn.com/logos/svelte.svg)
![node_img](https://www.anychart.com/_design/img/upload/plugins/nodejs-logo.png)


# Technologies conteneurisées
* [MongoDB](https://www.mongodb.com) : Système de gestion de base de données orienté documents
* [MongoExpress](https://github.com/mongo-express/mongo-express) : Interface graphique semblable à phpMyAdmin pour MongoDB
* [NodeJS](https://nodejs.org/en/) Javascript runtime
* [Svelte](https://svelte.dev/) Framework Javascript n'utilisant pas de DOM virtuel, écrit par Rich Harris

# Comment démarrer mon environnement de développement ?
1. Cloner le repository
```sh
$ git clone https://github.com/aTewan/docker-MESN.git
```
2. Aller dans le dossier docker-MESN
```sh
$ cd docker-MESN/
```
3. Monter l'environnement Docker
```sh
$ docker-compose up
```

# Une fois démarrer comment accéder aux différents conteneurs déployés ?
* L'API développée en NodeJS et Express est disponible à l'adresse suivante :
```sh
http://localhost:80
```
* L'interface de MongoExpress est disponible à l'adresse suivante : 
```sh
http://localhost:8081
```
* L'application web todoapp en Svelte est disponible à l'adresse suivante : 
```sh
http://localhost:5000
```