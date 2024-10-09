-- MySQL dump 10.13  Distrib 8.0.37, for Win64 (x86_64)
--
-- Host: localhost    Database: cuisine
-- ------------------------------------------------------
-- Server version	8.0.37
/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */
;

/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */
;

/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */
;

/*!50503 SET NAMES utf8mb4 */
;

/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */
;

/*!40103 SET TIME_ZONE='+00:00' */
;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */
;

/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */
;

/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */
;

/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */
;

CREATE DATABASE IF NOT EXISTS cuisine;

USE cuisine;

--
-- Table structure for table `categories`
--
DROP TABLE IF EXISTS `categories`;

/*!40101 SET @saved_cs_client     = @@character_set_client */
;

/*!50503 SET character_set_client = utf8mb4 */
;

CREATE TABLE `categories` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nom` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `nom` (`nom`)
) ENGINE = InnoDB AUTO_INCREMENT = 7 DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

/*!40101 SET character_set_client = @saved_cs_client */
;

--
-- Dumping data for table `categories`
--
LOCK TABLES `categories` WRITE;

/*!40000 ALTER TABLE `categories` DISABLE KEYS */
;

INSERT INTO
  `categories`
VALUES
  (3, 'Desserts'),
(1, 'Entrées froides'),
(2, 'Plats principaux'),
(4, 'Salades'),
(5, 'Snacks');

/*!40000 ALTER TABLE `categories` ENABLE KEYS */
;

UNLOCK TABLES;

--
-- Table structure for table `recettes`
--
DROP TABLE IF EXISTS `recettes`;

/*!40101 SET @saved_cs_client     = @@character_set_client */
;

/*!50503 SET character_set_client = utf8mb4 */
;

CREATE TABLE `recettes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `titre` varchar(100) NOT NULL,
  `ingredients` text NOT NULL,
  `type` enum('entrée', 'plat', 'dessert') NOT NULL,
  `categorie_id` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `titre` (`titre`),
  KEY `fk_categorie` (`categorie_id`),
  CONSTRAINT `fk_categorie` FOREIGN KEY (`categorie_id`) REFERENCES `categories` (`id`) ON DELETE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 7 DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

/*!40101 SET character_set_client = @saved_cs_client */
;

--
-- Dumping data for table `recettes`
--
LOCK TABLES `recettes` WRITE;

/*!40000 ALTER TABLE `recettes` DISABLE KEYS */
;

INSERT INTO
  `recettes`
VALUES
  (
    1,
    'Tarte aux pommes',
    '200g de farine, 100g de beurre, 4 pommes, 50g de sucre',
    'dessert',
    3
  ),
(
    2,
    'Salade César',
    '1 laitue romaine, 100g de poulet grillé, 50g de parmesan, 50g de croûtons, 50ml de sauce César',
    'entrée',
    1
  ),
(
    3,
    'Pâtes à la carbonara',
    '200g de pâtes, 100g de lardons, 50g de parmesan, 2 oeufs, sel, poivre',
    'plat',
    2
  ),
(
    4,
    'Soupe de tomates',
    '1kg de tomates, 1 oignon, 2 gousses d\'ail, 500ml de bouillon, basilic',
    'entrée',
    1
  ),
(
    5,
    'Mousse au chocolat',
    '200g de chocolat noir, 4 oeufs, 50g de sucre, 200ml de crème',
    'dessert',
    3
  ),
(
    6,
    'Wrap au poulet',
    '1 tortilla, 100g de poulet, 50g de fromage, laitue, tomate',
    'plat',
    2
  );

/*!40000 ALTER TABLE `recettes` ENABLE KEYS */
;

UNLOCK TABLES;

/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */
;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */
;

/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */
;

/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */
;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */
;

/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */
;

/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */
;

/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */
;

-- Dump completed on 2024-10-09  9:14:10