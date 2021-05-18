-- MySQL dump 10.13  Distrib 8.0.21, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: full-stack-resteasy
-- ------------------------------------------------------
-- Server version	8.0.21

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
-- Table structure for table `address`
--

DROP TABLE IF EXISTS `address`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `address` (
  `addressid` int NOT NULL AUTO_INCREMENT,
  `city` varchar(20) DEFAULT NULL,
  `country` varchar(20) DEFAULT NULL,
  `state` varchar(20) DEFAULT NULL,
  `street` varchar(20) DEFAULT NULL,
  `zipcode` varchar(6) DEFAULT NULL,
  PRIMARY KEY (`addressid`)
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `address`
--

LOCK TABLES `address` WRITE;
/*!40000 ALTER TABLE `address` DISABLE KEYS */;
INSERT INTO `address` VALUES (5,'Vizag','India','AndhraPradesh','RH Colony','530044'),(6,'Vizianagaram','India','Telangana','Gandhi Nagar','520453'),(7,NULL,NULL,NULL,NULL,NULL),(8,'Visakahaptanam','India','AndhraPradesh','Hanuman Nagar','532245'),(9,NULL,NULL,NULL,NULL,NULL),(10,NULL,NULL,NULL,NULL,NULL),(11,NULL,NULL,NULL,NULL,NULL),(12,NULL,NULL,NULL,NULL,NULL),(13,'fghjkl','Spain','TamilNadu','dfghjkl','234567'),(14,'fghjk','France','Telangana','xfghjghj','234565'),(15,NULL,NULL,NULL,NULL,NULL),(16,'dfghjkl','Spain','Karnataka','sdfghjukdfghjk','234567'),(17,NULL,NULL,NULL,NULL,NULL),(18,NULL,NULL,NULL,NULL,NULL),(19,'sdfghgjhkl','France','Telangana','xcfghjk','123243'),(20,NULL,NULL,NULL,NULL,NULL),(21,'tyuiop','Spain','Telangana','asdfghjkl','234565'),(22,NULL,NULL,NULL,NULL,NULL),(23,'fghjkll','France','Telangana','szdfghjkl','213456'),(24,NULL,NULL,NULL,NULL,NULL),(25,'dfghjkl','Spain','Telangana','sdfghjk','123445'),(26,'dfghgjhkjfghj','France','AndhraPradesh','fghjkcvbnh','345678'),(27,'fghjkl','Spain','AndhraPradesh','fcghjk','324567'),(28,NULL,NULL,NULL,NULL,NULL),(29,'fghjkl','India','Telangana','dfghjk','234567'),(30,'dfghjkertyu','France','Telangana','dfghjk','345678'),(31,'dfghj','Spain','AndhraPradesh','dxfghj','345678'),(32,'fgthyjukilk','France','AndhraPradesh','sdfghjk','345678'),(33,'fgghjk','India','Telangana','edfghj','234567'),(34,'cfgvbnjb','Spain','Telangana','fjkcvbn','567895'),(35,'hjk','France','Telangana','sdfghj','345678'),(36,'dfghjk','India','Telangana','dxfghjkl','530044'),(37,'dfghj','Spain','AndhraPradesh','dfghjnm','345678'),(38,'fghjkl','Spain','AndhraPradesh','vbhjnmm','345657'),(39,'dfghj','India','AndhraPradesh','xdfghj','234546'),(40,'fcghjk','Spain','Telangana','ghjklbhjnkl','435456');
/*!40000 ALTER TABLE `address` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-05-18 20:23:45
