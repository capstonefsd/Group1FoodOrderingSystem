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
-- Table structure for table `menu`
--

DROP TABLE IF EXISTS `menu`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `menu` (
  `dishid` int NOT NULL,
  `dishname` varchar(255) DEFAULT NULL,
  `dishprice` double NOT NULL,
  `hotel` varchar(255) DEFAULT NULL,
  `img_url` varchar(255) DEFAULT NULL,
  `qty` int NOT NULL,
  PRIMARY KEY (`dishid`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `menu`
--

LOCK TABLES `menu` WRITE;
/*!40000 ALTER TABLE `menu` DISABLE KEYS */;
INSERT INTO `menu` VALUES (1,'Roti',10,'Udipi','roti.jpg',1),(2,'Masala Dosa',25,'Udipi','masaladosa.jpg',1),(3,'Idli',30,'Udipi','idli.jpg',1),(4,'Gulab Jamun',60,'Udipi','gulabjamun.jfif',1),(5,'Fried Rice',160,'AdiGas','friedrice.jpg',1),(6,'Kadai Panner',125,'AdiGas','panner.jpg',1),(7,'Butter Nan',40,'RotiGhar','butternan.jpg',1),(8,'Paratha',30,'RotiGhar','paratha.jpg',1),(9,'Roti',25,'RotiGhar','roti.jpg',1),(10,'Noodles',40,'RotiGhar','noodles.jpg',1),(11,'Chole Chawal',70,'PunjabiRasoi','cholechawal.png',1),(12,'Rajma Chawal',90,'PunjabiRasoi','rajmachawal.jpg',1),(13,'Dal',30,'PunjabiRasoi','dal.jpg',1),(14,'Rasmalai',60,'PunjabiRasoi','rasmalai.png',1),(15,'Butter Nan',40,'PunjabiRasoi','butternan.jpg',1),(16,'Ice Cream',25,'RotiGhar','icecream.jpg',1),(17,'Ice Cream',60,'AdiGas','icecream.jpg',1),(18,'Butter Nan',80,'AdiGas','butternan.jpg',1);
/*!40000 ALTER TABLE `menu` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-05-18 20:23:46
