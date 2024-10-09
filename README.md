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
- Créez un fichier .env avec la configuration de votre base de données, et il doit être créé à la racine du projet. :

```bash
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=mots_de_passe
DB_NAME=nom_de_la_base_de_donnée
port=4000

MYSQL_ROOT_PASSWORD=mots_de_passe
MYSQL_DATABASE=nom_de_la_base_de_donnée

```

5. Importer la base de données :

- pour importez la base de donées veuillez vous situez a la racine du projet et taper la commande suivantes.

```bash
    mysqldump -u root -p cuisine < cuisine.sql

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
        "titre": "Tarte aux pommes",
        "ingredients": "200g de farine, 100g de beurre, 4 pommes, 50g de sucre",
        "type": "dessert",
        "categorie_id": 3
    },
    {
        "id": 2,
        "titre": "Salade César",
        "ingredients": "1 laitue romaine, 100g de poulet grillé, 50g de parmesan, 50g de croûtons, 50ml de sauce César",
        "type": "entrée",
        "categorie_id": 1
    },
    {
        "id": 3,
        "titre": "Pâtes à la carbonara",
        "ingredients": "200g de pâtes, 100g de lardons, 50g de parmesan, 2 oeufs, sel, poivre",
        "type": "plat",
        "categorie_id": 2
    },
    {
        "id": 4,
        "titre": "Soupe de tomates",
        "ingredients": "1kg de tomates, 1 oignon, 2 gousses d'ail, 500ml de bouillon, basilic",
        "type": "entrée",
        "categorie_id": 1
    },
    {
        "id": 5,
        "titre": "Mousse au chocolat",
        "ingredients": "200g de chocolat noir, 4 oeufs, 50g de sucre, 200ml de crème",
        "type": "dessert",
        "categorie_id": 3
    },
    {
        "id": 6,
        "titre": "Wrap au poulet",
        "ingredients": "1 tortilla, 100g de poulet, 50g de fromage, laitue, tomate",
        "type": "plat",
        "categorie_id": 2
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
    "titre": "Tarte aux pommes",
    "ingredients": "200g de farine, 100g de beurre, 4 pommes, 50g de sucre",
    "type": "dessert",
    "categorie_id": 3
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
  "titre": "Nouvelle Recette",
  "ingredients": "200g de farine, 100g de sucre, 3 oeufs",
  "type": "dessert",
  "categorie_id": 4
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
  "titre": "Nouvelle Recette",
  "ingredients": "250g de farine, 100g de sucre, 3 oeufs",
  "type": "dessert",
  "categorie_id": 4
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
- **Exemple URL** : http://localhost:4000/api/recipe/7
- **Reponse** :

```bash
{
    "message": "Suppression réussie avec succès"
}
```

### 6. Rechercher des recettes

- **URL** : `/recipes`
- **Méthode HTTP** : `GET`
- **Description** : Rechercher des recettes
- **Exemple URL** : http://localhost:4000/api/recipes/search?nom=pommes
- **Reponse** :

  ```bash
  [
    {
        "id": 1,
        "titre": "Tarte aux pommes",
        "ingredients": "200g de farine, 100g de beurre, 4 pommes, 50g de sucre",
        "type": "dessert",
        "categorie_id": 3
    }
  ]
  ```

### 7. Obtenir toutes les catégories

- **URL** : `/categories`
- **Méthode HTTP** : `GET`
- **Description** : Récupère toutes les catégories de la base de données.
- **Exemple** : http://localhost:4000/api/categories
- **Reponse** :

```bash
  [
    {
        "id": 3,
        "nom": "Desserts"
    },
    {
        "id": 1,
        "nom": "Entrées froides"
    },
    {
        "id": 6,
        "nom": "Plat Africain"
    },
    {
        "id": 2,
        "nom": "Plats principaux"
    },
    {
        "id": 4,
        "nom": "Salades"
    },
    {
        "id": 5,
        "nom": "Snacks"
    }
]
```

### 8. Obtenir une catégorie par ID

- **URL** : `/categories`
- **Méthode HTTP** : `GET`
- **Description** : Récupère une catégories par ID.
- **Exemple** : http://localhost:4000/api/categories/3
- **Reponse** :

```bash
{
    "id": 3,
    "nom": "Desserts"
}
```

### 9. Créer une nouvelle catégorie

- **URL** : `/categories`
- **Méthode HTTP** : `POST`
- **Description** : Récupère une catégories par ID.
- **Exemple** : http://localhost:4000/api/categories
- **Reponse** :

```bash
{
  "nom": "Plat Sénegalais"
}
```

### 10. Mettre à jour une catégorie par ID

- **URL** : `/categories`
- **Méthode HTTP** : `PUT`
- **Description** : Mets à jour une catégorie par ID
- **Exemple** : http://localhost:4000/api/categories/8
- **Reponse** :

```bash
{
  "nom": "Plat Sénegalaise"
}
```

### 11. Supprimer une recette

- **URL** : `/categories/:id`
- **Méthode HTTP** : `DELETE`
- **Description** : Supprime une categorie existante en fonction de son ID.
- **Exemple URL** : http://localhost:4000/api/categories/8
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
