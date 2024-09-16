-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: localhost    Database: knjizara_database
-- ------------------------------------------------------
-- Server version	8.0.37

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `book`
--

DROP TABLE IF EXISTS `book`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `book` (
  `book_id` int unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci NOT NULL,
  `author` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
  `publisher_id` int unsigned NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime DEFAULT NULL,
  `deleted_at` datetime DEFAULT NULL,
  `genre_id` int unsigned NOT NULL,
  PRIMARY KEY (`book_id`),
  UNIQUE KEY `uq_knjiga_title` (`title`),
  KEY `fk_book_publisher_idx` (`publisher_id`) /*!80000 INVISIBLE */,
  KEY `fk_book_genre_idx` (`genre_id`),
  CONSTRAINT `fk_book_genre` FOREIGN KEY (`genre_id`) REFERENCES `genre` (`genre_id`),
  CONSTRAINT `fk_book_publisher` FOREIGN KEY (`publisher_id`) REFERENCES `publisher` (`publisher_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `book`
--

LOCK TABLES `book` WRITE;
/*!40000 ALTER TABLE `book` DISABLE KEYS */;
INSERT INTO `book` VALUES (1,'Šaptač','Donato Karizi',1,'2024-09-16 11:45:04',NULL,NULL,1),(2,'Čovek po imenu Uve','Frederik Bakman',3,'2024-09-16 11:45:48',NULL,NULL,2);
/*!40000 ALTER TABLE `book` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `genre`
--

DROP TABLE IF EXISTS `genre`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `genre` (
  `genre_id` int unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb3_unicode_ci NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime DEFAULT NULL,
  `deleted_at` datetime DEFAULT NULL,
  PRIMARY KEY (`genre_id`),
  UNIQUE KEY `uq_genre_name` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `genre`
--

LOCK TABLES `genre` WRITE;
/*!40000 ALTER TABLE `genre` DISABLE KEYS */;
INSERT INTO `genre` VALUES (1,'triler','2024-09-14 14:28:44',NULL,NULL),(2,'roman','2024-09-14 14:28:44',NULL,NULL),(3,'domaći roman','2024-09-14 14:28:44',NULL,NULL),(4,'triler/misterija','2024-09-14 14:28:44',NULL,NULL),(5,'klasik','2024-09-14 14:28:44','2024-09-15 16:35:39',NULL),(6,'biografija','2024-09-15 14:02:21','2024-09-16 11:41:47',NULL),(7,'fantastika','2024-09-15 16:03:06',NULL,'2024-09-15 16:35:58'),(8,'naučna fantastika','2024-09-15 16:36:13',NULL,NULL),(11,'dečja knjiga','2024-09-16 11:31:49',NULL,'2024-09-16 11:41:52');
/*!40000 ALTER TABLE `genre` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `publisher`
--

DROP TABLE IF EXISTS `publisher`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `publisher` (
  `publisher_id` int unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb3_unicode_ci NOT NULL,
  `address` varchar(255) COLLATE utf8mb3_unicode_ci NOT NULL,
  `contact` varchar(45) COLLATE utf8mb3_unicode_ci NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime DEFAULT NULL,
  `deleted_at` datetime DEFAULT NULL,
  PRIMARY KEY (`publisher_id`),
  UNIQUE KEY `uq_publisher_name` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `publisher`
--

LOCK TABLES `publisher` WRITE;
/*!40000 ALTER TABLE `publisher` DISABLE KEYS */;
INSERT INTO `publisher` VALUES (1,'Dereta','Neka adresa 1','011112233','2024-09-12 16:18:43','2024-09-14 21:01:51',NULL),(2,'Vulkan izdavaštvo','Neka adresa 2','011225566','2024-09-14 13:21:37',NULL,NULL),(3,'Laguna','Neka adresa 3','011447788','2024-09-14 13:21:37',NULL,NULL),(4,'Geopoetika','Neka adresa 4','011889977','2024-09-14 13:21:37',NULL,NULL),(5,'Čarobna knjiga','Neka adresa 5','011448899','2024-09-14 13:21:37','2024-09-14 19:44:00',NULL),(6,'Arhipelag','Neka adresa 6','011112233','2024-09-14 13:21:37',NULL,NULL),(7,'Strahor','Neka adresa7','011223344','2024-09-14 13:21:37',NULL,NULL),(8,'Ganeša klub','Neka adresa 8','011334455','2024-09-14 13:21:37',NULL,NULL),(9,'Makart','Neka adresa 9','011445566','2024-09-14 13:21:37',NULL,NULL),(10,'Kreativni centar','Neka adresa 10','011556677','2024-09-14 13:21:37',NULL,NULL),(11,'CLIO','Neka adresa 11','011667788','2024-09-14 13:21:37',NULL,NULL),(12,'Riznica lepih reči','Neka adresa 12','011778899','2024-09-14 13:21:37','2024-09-16 11:41:18',NULL),(13,'Agora','Neka adresa 16','011448899','2024-09-15 16:34:55','2024-09-15 16:35:10','2024-09-15 16:35:14'),(14,'Neka izdavačka kuća','Neka adresa 14','011778899','2024-09-15 18:44:04',NULL,'2024-09-16 11:41:04');
/*!40000 ALTER TABLE `publisher` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'knjizara_database'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-09-16 11:50:10
