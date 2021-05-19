-- MySQL dump 10.13  Distrib 8.0.24, for Win64 (x86_64)
--
-- Host: localhost    Database: csc317db
-- ------------------------------------------------------
-- Server version	8.0.24

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
-- Table structure for table `comments`
--

DROP TABLE IF EXISTS `comments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `comments` (
  `id` int NOT NULL AUTO_INCREMENT,
  `comment` longtext NOT NULL,
  `bw_authorid` int NOT NULL,
  `bw_postid` int NOT NULL,
  `created` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  KEY `key_tousertable_idx` (`bw_authorid`),
  KEY `key_toposttable_idx` (`bw_postid`),
  CONSTRAINT `key_toposttable` FOREIGN KEY (`bw_postid`) REFERENCES `posts` (`id`),
  CONSTRAINT `key_tousertable` FOREIGN KEY (`bw_authorid`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=46 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comments`
--

LOCK TABLES `comments` WRITE;
/*!40000 ALTER TABLE `comments` DISABLE KEYS */;
INSERT INTO `comments` VALUES (4,'this is a test comment from curl',21,4,'2021-05-13 01:53:30'),(5,'this is a test comment from curl',21,4,'2021-05-13 01:53:30'),(6,'this is a test comment from curl',21,4,'2021-05-13 01:53:30'),(7,'this is a test comment from curl',21,4,'2021-05-13 01:53:30'),(8,'this is a test comment from curl',21,4,'2021-05-13 01:53:30'),(9,'this is a test comment from a logged in user',21,5,'2021-05-13 23:52:52'),(10,'this is a full test of the comment API',21,5,'2021-05-14 00:13:30'),(11,'this is a full test of the comment API round 2',21,5,'2021-05-14 00:16:41'),(12,'this is a full test of the comment API round 3',21,5,'2021-05-14 00:17:43'),(13,'this is a full test of the comment API round 4',21,5,'2021-05-14 00:17:47'),(14,'this is a full test of the comment API round 5',21,5,'2021-05-14 00:17:51'),(15,'rip kurt :(',21,5,'2021-05-14 00:18:40'),(16,'Twinkle twinkle little star',19,9,'2021-05-14 11:28:56'),(17,'how i wonder what you are',19,9,'2021-05-14 11:30:30'),(18,'ffefqefeefdcdcwwdwdwcscscsc\nscs\ncs\ncs\ncs\ncs',19,5,'2021-05-14 13:03:18'),(19,' n  ',19,5,'2021-05-14 20:12:22'),(20,'come as you are,\nas you were,\nas i want you to be',22,5,'2021-05-14 21:56:29'),(22,'Come as you are, as you were\nAs I want you to be\nAs a friend, as a friend\nAs an old enemy\nTake your time, hurry up\nChoice is yours, don\'t be late\nTake a rest as a friend\nAs an old\nMemoria, memoria\nMemoria, memoria\nCome doused in mud, soaked in bleach\nAs I want you to be\nAs a trend, as a friend\nAs an old\nMemoria, memoria',22,5,'2021-05-14 22:19:17'),(23,' return !(obj.constucto return !(obj.constucto return !(obj.constucto return !(obj.constucto return !(obj.constucto return !(obj.constucto return !(obj.constucto return !(obj.constucto return !(obj.constucto return !(obj.constucto return !(obj.constucto return !(obj.constucto return !(obj.constucto return !(obj.constucto return !(obj.constucto return !(obj.constucto return !(obj.constucto return !(obj.constucto return !(obj.constucto return !(obj.constucto return !(obj.constucto return !(obj.constucto',22,5,'2021-05-14 22:48:12'),(24,'Best album of the 90s.',19,5,'2021-05-15 13:21:24'),(25,'So inappropriate!',21,4,'2021-05-17 10:26:53'),(26,'I can\'t believe you would post this',21,4,'2021-05-17 10:27:26'),(27,'Epic comment 1',19,6,'2021-05-17 11:27:28'),(28,'Epic comment 1',19,6,'2021-05-17 11:27:30'),(29,'jnjn',19,6,'2021-05-17 11:29:13'),(30,'kjj',19,6,'2021-05-17 11:35:57'),(31,'jnjn',19,6,'2021-05-17 11:37:41'),(32,'pewds',19,6,'2021-05-17 11:37:48'),(33,'pewds hbbhb',19,6,'2021-05-17 11:37:52'),(34,'I post malones it!',19,6,'2021-05-17 11:40:50'),(35,'The Killers > Smash Mouth',19,9,'2021-05-17 11:41:23'),(36,'But Shrek > Harry Potter',19,9,'2021-05-17 11:41:46'),(37,'jbnjb',19,9,'2021-05-17 11:53:57'),(38,'jbnjb bhbbhbh',19,9,'2021-05-17 11:54:01'),(39,'jbnjb bhbbhbh hh',19,9,'2021-05-17 11:54:05'),(40,'List of Things I Need to Complete Before the End of Tuesday (When the Website Is Due):\n1: Add the orb images which will allow me to change the theme of the website at any time.\n2: Add a drop down search bar which will work “onkeypress == enter.” (DONE!)\n3: Change the layout of my Individual Post Border so that the aspect ratio of the image is preserved and the description and comments appear in order.\n4: Add server-side validation for posting an image.\n5: Add footer.\n',19,9,'2021-05-17 11:55:30'),(41,'Disgusting.',19,10,'2021-05-18 01:10:38'),(42,'Disgusting. ',19,10,'2021-05-18 01:10:46'),(43,'Please delete this.',19,10,'2021-05-18 01:11:03'),(44,'Commenting with the green background.',19,5,'2021-05-18 15:29:27'),(45,'Hello Professor Souza,\nI apologize for the crude image I posted here. At the time I worked on this project I rushed to complete everything on Milestone 4 and this image was one of the only ones I had on my computer at the time, so I used it for testing purposes only. It\'s actually a screenshot of a funny Wheel of Fortune gameplay video from the YouTubeLet\'s Play channel TheRunawayGuys, but out of context it probably looks quite bad. Once again, I apologize sincerely, along with my photo for Kurt Cobain. Anyway, thanks for making this the most fun Computer Science class I had so far at SF State! Have a good summer! :)',19,4,'2021-05-19 01:21:56');
/*!40000 ALTER TABLE `comments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `posts`
--

DROP TABLE IF EXISTS `posts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `posts` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(128) NOT NULL,
  `description` varchar(4096) NOT NULL,
  `photopath` varchar(4096) NOT NULL,
  `thumbnail` varchar(4096) NOT NULL,
  `active` int NOT NULL DEFAULT '0',
  `created` datetime NOT NULL,
  `bw_userid` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  KEY `posts to users_idx` (`bw_userid`),
  CONSTRAINT `posts to users` FOREIGN KEY (`bw_userid`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `posts`
--

LOCK TABLES `posts` WRITE;
/*!40000 ALTER TABLE `posts` DISABLE KEYS */;
INSERT INTO `posts` VALUES (4,'test02','test02','public\\images\\uploads\\80da992f8add235e5c780c7d54dc388ed26e5c4844e6.jpeg','public/images/uploads/thumbnail-80da992f8add235e5c780c7d54dc388ed26e5c4844e6.jpeg',0,'2021-05-08 11:53:22',19),(5,'test03','nevermind','public\\images\\uploads\\1e25f1348d6bf7ab56b54c8f27c4f660710bf829a40e.jpeg','public/images/uploads/thumbnail-1e25f1348d6bf7ab56b54c8f27c4f660710bf829a40e.jpeg',0,'2021-05-08 11:55:36',19),(6,'theed','sneed','public\\images\\uploads\\28ba67722c596e87d2ac43c42b652720c2e06d04cafc.jpeg','public/images/uploads/thumbnail-28ba67722c596e87d2ac43c42b652720c2e06d04cafc.jpeg',0,'2021-05-08 14:34:54',19),(7,'arrow','it\'s a pic of an arrow lol','public\\images\\uploads\\5f089e5f9268062da830a6919d7359462d47cdf82070.png','public/images/uploads/thumbnail-5f089e5f9268062da830a6919d7359462d47cdf82070.png',0,'2021-05-08 16:02:22',19),(9,'star','somebody once told me that you had a boyfriend who looked like a girlfriend','public\\images\\uploads\\fa4e8aadbf029e5e08a7a50d791daaea084b27db5f89.png','public/images/uploads/thumbnail-fa4e8aadbf029e5e08a7a50d791daaea084b27db5f89.png',0,'2021-05-11 22:52:11',21),(10,'Hello','Poop','public\\images\\uploads\\602c124aa7c81b3ffe161a05600c11fde7e95c1ec95e.png','public/images/uploads/thumbnail-602c124aa7c81b3ffe161a05600c11fde7e95c1ec95e.png',0,'2021-05-18 01:09:55',19);
/*!40000 ALTER TABLE `posts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(64) NOT NULL,
  `email` varchar(128) NOT NULL,
  `password` varchar(128) NOT NULL,
  `usertype` int NOT NULL DEFAULT '0',
  `active` int NOT NULL DEFAULT '0',
  `created` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  UNIQUE KEY `username_UNIQUE` (`username`),
  UNIQUE KEY `userscol1_UNIQUE` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (15,'BlitzLightning','newballthunder@yahoo.com','$2b$15$O/lq0p4Aax.3Rqb2MfM27OkjzSDcgwftDfzil5Kvef3jsv4PcqqtW',0,0,'2021-04-30 22:52:34'),(16,'Apothemyst','xenogears@gmail.com','$2b$15$UYRm7yomDn4OhrOgBWyxIeSPn5ZQ5sKwM00Va/w9rdcYQ.I9N56CS',0,0,'2021-04-30 23:02:06'),(18,'dragonsh1tlord','Pokemon@gmail.com','$2b$15$1m4awmcOhdQVp5wq0e4O.e51m5QW5dqNJIyco3VAD7qk2kBvcC7ly',0,0,'2021-05-01 00:06:57'),(19,'thetester','sultrypoophead@gmail.com','$2b$15$ntwVZYyC/V0pxgW0y7Z1vu1E1B3BqhDjNgqR7.O.rS4KwfoUhuCF.',0,0,'2021-05-01 10:52:52'),(20,'mytestaccount','mytestemail@email.com','$2b$15$yww1YSaNgICL/40wyPcIeOamuXTAg61O.92nTJAW1PCezS4CKNmBu',0,0,'2021-05-01 15:52:15'),(21,'ButtTheed','beavis02@gmail.com','$2b$15$y.TCIQGTtph9hrgvcURYgO.4A/iFgPJQlLlMkV5Uqfhq7/QlhByNm',0,0,'2021-05-11 21:30:28'),(22,'MonasteryMan','loganpaulsucks@yahoo.com','$2b$15$NZ8PFPBwEm9y5IyL.qlwl.Dgzb6e4mkZAJYTrXOWcJMNRu14KvIKy',0,0,'2021-05-14 20:30:41'),(23,'xxxyyy','dwdwd@gmail.com','$2b$15$UGgSiKnGQFbNqjgbScP15.DJlLu.ZOIRWB7Toj1bzJYKnhnh8IzS2',0,0,'2021-05-18 11:31:47');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-05-19  1:26:25
