# API Gestion de Recettes

Cette API, développée avec **Express.js** et utilisant **MySQL** comme base de données, permet de gérer les recettes avec des fonctionnalités CRUD (Créer, Lire, Mettre à jour, Supprimer). Elle permet une gestion flexible et efficace des recettes.

## Prérequis

Avant de commencer, assurez-vous d'avoir installé les éléments suivants sur votre machine :

- [Node.js](https://nodejs.org/) (v16 ou supérieure)
- [MySQL](https://www.mysql.com/)
- [Postman](https://www.postman.com/) (facultatif, pour tester l'API)
- Express.js

## Installation

Suivez ces étapes pour configurer le projet sur votre machine locale :

1. Clonez le repository :

```bash
    git clone https://github.com/Mohamed11abdallah/api_recette_backend.git
```

2. Accédez au dossier du projet :

```bash
    cd api_recette_backend
```

3. Installez les dépendances :

```bash
    npm install
```

4. Configurer la base de données :

- Assurez-vous que Mysql est en cours d'exécution sur votre machine locale.
- Mettez les paramètres de connexion dans db.js.
- Créez un fichier .env avec la configuration de votre base de données :

```bash
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=mots_de_passe
DB_NAME=nom_de_la_base_de_donnée
port=4000

MYSQL_ROOT_PASSWORD=mots_de_passe
MYSQL_DATABASE=nom_de_la_base_de_donnée

```

## Utilisation

Exécutez la commande suivante pour démarrer l'application, :

```bash
    npm start
```

## Routes disponibles

### 1. Récupérer toutes les recettes

- **URL** : `/recipes`
- **Méthode HTTP** : `GET`
- **Description** : Récupère toutes les recettes de la base de données.
- **Exemple** : http://localhost:4000/api/recipes/
- **Reponse** :
  ```bash
  [
    {
      "id": 1,
      "titre": "Spaguettue",
      "ingredient": "Spagurttue viande Oignons pouvre_noir",
      "type": "plat"
    },
    {
      "id": 2,
      "titre": "Couscous",
      "ingredient": "Viande OIgnons sel couscous",
      "type": "plat"
    }
  ]
  ```

### 2. Récupérer une recette par son ID

- **URL** : `/recipes/:id`
- **Méthode HTTP** : `GET`
- **Description** : Récupère une recette spécifique à partir de son ID.
- **Exemple URL** : http://localhost:4000/api/recipe/1
- **Reponse** :

  ```bash
  {
    "id": 1,
    "titre": "Spaguettue",
    "ingredient": "Spagurttue viande Oignons pouvre_noir",
    "type": "plat"
  }
  ```

### 3. Créer une nouvelle recette

- **URL** : `/recipes`
- **Méthode HTTP** : `POST`
- **Description** : Crée une nouvelle recette.
- **Exemple URL** : http://localhost:4000/api/recipes/
- **Corps de la requête** (JSON) :

```bash
{
  "titre": "Spaguettue",
  "ingredient": "Spagurttue viande Oignons pouvre_noir",
  "type": "plat"
},
{
  "titre": "Couscous",
  "ingredient": "Viande OIgnons sel couscous",
  "type": "plat"
}
```

- **Reponse** :

```bash
{
    "message": "Recette ajoutée avec succès"
}
```

### 4. Mettre à jour une recette

- **URL** : `/recipes/:id`
- **Méthode HTTP** : `PUT`
- **Description** : Met à jour les informations d'une recette existante en fonction de son ID.
- **Exemple URL** : http://localhost:4000/api/recipe/2

- **Corps de la requête** (JSON) :

  ```bash
  {
    "titre": "Couscous",
    "ingredient": "Viande Oignons sel couscous",
    "type": "plat"
  }
  ```

- **Reponse** :

```bash
{
    "message": "Mise à jour réussie avec succès"
}
```

### 5. Supprimer une recette

- **URL** : `/recipes/:id`
- **Méthode HTTP** : `DELETE`
- **Description** : Supprime une recette existante en fonction de son ID.
- **Exemple URL** : http://localhost:4000/api/recipe/1
- **Reponse** :

```bash
{
    "message": "Suppression réussie avec succès"
}
```

## Collection de tests Postman

### Importer la collection Postman

Nous avons préparé une collection de requêtes Postman pour faciliter les tests de l'API. Vous pouvez l'importer dans Postman pour tester tous les endpoints CRUD (GET, POST, PUT, DELETE).

#### Étapes pour importer la collection :

1. Télécharger la collection Postman exportée en cliquant [ici](./collection.json).
2. Ouvrez Postman.
3. Cliquez sur **Importer** en haut à gauche.
4. Sélectionnez le fichier `.json` exporté et cliquez sur **Importer**.
5. Vous verrez la collection `collection` dans votre interface Postman.

## Comment exécuter les tests unitaires

Assurez-vous que votre base de données est configurée correctement avant d'exécuter les tests. Jasmine affichera un rapport des tests exécutés, ainsi que les résultats (succès ou échecs).

```bash
npm test
```

## Analyse et formatage du code

- Exécuter ce code pour l'analyse et la correction :

```bash
npm run lint
```

- Exécuter le formatage automatique avec :

```bash
npm run format
```

## Auteur

[Mohamed Abdallahi M'khaitir](https://github.com/Mohamed11abdallah)
