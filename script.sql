DROP DATABASE IF EXISTS cuisine;

CREATE DATABASE cuisine;

USE cuisine;

DROP TABLE IF EXISTS categories;

CREATE TABLE categories (
    id int NOT NULL AUTO_INCREMENT,
    nom varchar(100) NOT NULL,
    PRIMARY KEY (id),
    UNIQUE KEY nom (nom)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

DROP TABLE IF EXISTS recettes;

CREATE TABLE recettes (
    id int NOT NULL AUTO_INCREMENT,
    titre varchar(100) NOT NULL,
    ingredients text NOT NULL,
    type enum('entrée', 'plat', 'dessert') NOT NULL,
    categorie_id int NOT NULL,
    PRIMARY KEY (id),
    UNIQUE KEY titre (titre),
    KEY fk_categorie (categorie_id),
    CONSTRAINT fk_categorie FOREIGN KEY (categorie_id) REFERENCES categories (id) ON DELETE RESTRICT
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

INSERT INTO
    categories (nom)
VALUES
    ('Entrées froides'),
    ('Plats principaux'),
    ('Desserts'),
    ('Salades'),
    ('Snacks'),
    ('Plat Africain');

INSERT INTO
    recettes (titre, ingredients, type, categorie_id)
VALUES
    (
        'Tarte aux pommes',
        '200g de farine, 100g de beurre, 4 pommes, 50g de sucre',
        'dessert',
        3
    ),
    (
        'Salade César',
        '1 laitue romaine, 100g de poulet grillé, 50g de parmesan, 50g de croûtons, 50ml de sauce César',
        'entrée',
        1
    ),
    (
        'Pâtes à la carbonara',
        '200g de pâtes, 100g de lardons, 50g de parmesan, 2 oeufs, sel, poivre',
        'plat',
        2
    ),
    (
        'Soupe de tomates',
        '1kg de tomates, 1 oignon, 2 gousses d\'ail, 500ml de bouillon, basilic',
        'entrée',
        1
    ),
    (
        'Mousse au chocolat',
        '200g de chocolat noir, 4 oeufs, 50g de sucre, 200ml de crème',
        'dessert',
        3
    ),
    (
        'Wrap au poulet',
        '1 tortilla, 100g de poulet, 50g de fromage, laitue, tomate',
        'plat',
        2
    );