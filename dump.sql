-- MySQL dump 10.13  Distrib 5.5.27, for Win32 (x86)
--
-- Host: localhost    Database: rbac
-- ------------------------------------------------------
-- Server version	5.5.27-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `mag_article`
--

DROP TABLE IF EXISTS `mag_article`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mag_article` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `author` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `content` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `state` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `tags` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `time` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `title` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `top` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mag_article`
--

LOCK TABLES `mag_article` WRITE;
/*!40000 ALTER TABLE `mag_article` DISABLE KEYS */;
INSERT INTO `mag_article` VALUES (1,'ads','sad','asd','dsad','asd','asd','asd'),(2,'asd','zxcvzxc','zxcvzxcv','zxcvzxcv','zxvczv','zxcvzxv','zxcvzxv');
/*!40000 ALTER TABLE `mag_article` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mag_banner`
--

DROP TABLE IF EXISTS `mag_banner`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mag_banner` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `artClass` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `artid` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `author` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `mappath` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `name` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `remark` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `time` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mag_banner`
--

LOCK TABLES `mag_banner` WRITE;
/*!40000 ALTER TABLE `mag_banner` DISABLE KEYS */;
/*!40000 ALTER TABLE `mag_banner` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mag_classify`
--

DROP TABLE IF EXISTS `mag_classify`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mag_classify` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `alias` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `miaoshu` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `name` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `pid` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mag_classify`
--

LOCK TABLES `mag_classify` WRITE;
/*!40000 ALTER TABLE `mag_classify` DISABLE KEYS */;
INSERT INTO `mag_classify` VALUES (1,'xwzx','新闻资讯','新闻资讯',0),(2,'tzgg','通知公告','通知公告',1),(3,'yjdt','业界动态','业界动态',1),(4,'xwzt','新闻专题','新闻专题',1);
/*!40000 ALTER TABLE `mag_classify` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mag_classify_art`
--

DROP TABLE IF EXISTS `mag_classify_art`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mag_classify_art` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `art_id` int(11) DEFAULT NULL,
  `classify_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK8053E594A9E589AA` (`classify_id`),
  KEY `FK8053E594B650A0FD` (`art_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mag_classify_art`
--

LOCK TABLES `mag_classify_art` WRITE;
/*!40000 ALTER TABLE `mag_classify_art` DISABLE KEYS */;
/*!40000 ALTER TABLE `mag_classify_art` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mag_mediapar`
--

DROP TABLE IF EXISTS `mag_mediapar`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mag_mediapar` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `author` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `mappath` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `remark` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `time` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `title` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `url` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mag_mediapar`
--

LOCK TABLES `mag_mediapar` WRITE;
/*!40000 ALTER TABLE `mag_mediapar` DISABLE KEYS */;
/*!40000 ALTER TABLE `mag_mediapar` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mag_page`
--

DROP TABLE IF EXISTS `mag_page`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mag_page` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `author` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `content` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `createtime` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `title` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mag_page`
--

LOCK TABLES `mag_page` WRITE;
/*!40000 ALTER TABLE `mag_page` DISABLE KEYS */;
/*!40000 ALTER TABLE `mag_page` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mag_works`
--

DROP TABLE IF EXISTS `mag_works`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mag_works` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `author` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `createtime` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `mappath` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `remark` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `size` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `state` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `texture` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `time` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `title` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `workclass_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK6EF4999623F7C4F9` (`workclass_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mag_works`
--

LOCK TABLES `mag_works` WRITE;
/*!40000 ALTER TABLE `mag_works` DISABLE KEYS */;
/*!40000 ALTER TABLE `mag_works` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mag_worksclass`
--

DROP TABLE IF EXISTS `mag_worksclass`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mag_worksclass` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `alias` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `icon` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `miaoshu` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `name` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `pid` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=27 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mag_worksclass`
--

LOCK TABLES `mag_worksclass` WRITE;
/*!40000 ALTER TABLE `mag_worksclass` DISABLE KEYS */;
INSERT INTO `mag_worksclass` VALUES (1,'pingmian','','书法','平面类',0),(2,'liti','','油画','立体类',0),(3,'shufa','/public/upload/worksclass/shufa.jpg','书法','书法',1),(4,'guohua','/public/upload/worksclass/guohua.jpg','国画','国画',1),(5,'youhua','/public/upload/worksclass/youhua.jpg','油画','油画',1),(6,'banhua','/public/upload/worksclass/banhua.jpg','版画','版画',1),(7,'suxie','/public/upload/worksclass/suxie.jpg','素描/速写','素描/速写',1),(8,'sheying','/public/upload/worksclass/sheying.jpg','摄影','摄影',1),(9,'shuishuise','/public/upload/worksclass/shuishuise.jpg','水彩/水粉/色粉','水彩/水粉/色粉',1),(10,'manhua','/public/upload/worksclass/manhua.jpg','漫画','漫画',1),(11,'lianhuanhua','/public/upload/worksclass/lianhuanhua.jpg','连环画','连环画',1),(12,'qihua','/public/upload/worksclass/qihua.jpg','漆画','漆画',1),(13,'xinnianhua','/public/upload/worksclass/xinnianhua.jpg','新年画','新年画',1),(14,'chatu','/public/upload/worksclass/chahua.jpg','插图','插图',1),(15,'chuantong','/public/upload/worksclass/chuantong.jpg','传统年画','传统年画',1),(16,'diaosu','/public/upload/worksclass/diaosu.jpg','雕塑','雕塑',2),(17,'xzzz','/public/upload/worksclass/xzzz.jpg','现代装置','现代装置',2),(18,'zhys','/public/upload/worksclass/zhys.jpg','综合艺术','综合艺术',2),(19,'fengzheng','/public/upload/worksclass/fengzheng.jpg','风筝','风筝',2),(20,'taoci','/public/upload/worksclass/taoci.jpg','陶瓷','陶瓷',2),(21,'ciyinzhi','/public/upload/worksclass/ciyinzhi.jpg','刺绣/印染/织物','刺绣/印染/织物',2),(22,'wanju','/public/upload/worksclass/wanju.jpg','玩具','玩具',2),(23,'jianzhi','/public/upload/worksclass/jianzhi.jpg','剪纸','剪纸',2),(24,'piying','/public/upload/worksclass/piying.jpg','皮影','皮影',2),(25,'mianju','/public/upload/worksclass/mianju.jpg','面具','面具',2),(26,'muou','/public/upload/worksclass/muou.jpg','木偶','木偶',2);
/*!40000 ALTER TABLE `mag_worksclass` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rbac_role`
--

DROP TABLE IF EXISTS `rbac_role`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `rbac_role` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `node` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `remark` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `roleid` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `status` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rbac_role`
--

LOCK TABLES `rbac_role` WRITE;
/*!40000 ALTER TABLE `rbac_role` DISABLE KEYS */;
INSERT INTO `rbac_role` VALUES (1,'超级管理员','','超级管理员','0','有效'),(2,'管理员','','管理员','0','有效'),(3,'会员','','会员','0','有效');
/*!40000 ALTER TABLE `rbac_role` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rbac_role_group`
--

DROP TABLE IF EXISTS `rbac_role_group`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `rbac_role_group` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `groups_id` int(11) DEFAULT NULL,
  `roles_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK81056983F74A5F51` (`groups_id`),
  KEY `FK81056983D0E65D9C` (`roles_id`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rbac_role_group`
--

LOCK TABLES `rbac_role_group` WRITE;
/*!40000 ALTER TABLE `rbac_role_group` DISABLE KEYS */;
INSERT INTO `rbac_role_group` VALUES (1,1,1),(2,2,2),(3,3,3),(4,4,3),(5,5,3),(6,6,3);
/*!40000 ALTER TABLE `rbac_role_group` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rbac_usergroup`
--

DROP TABLE IF EXISTS `rbac_usergroup`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `rbac_usergroup` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `groupname` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `pid` int(11) NOT NULL,
  `remark` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `status` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rbac_usergroup`
--

LOCK TABLES `rbac_usergroup` WRITE;
/*!40000 ALTER TABLE `rbac_usergroup` DISABLE KEYS */;
INSERT INTO `rbac_usergroup` VALUES (1,'超级管理员组',0,'超级管理员组','有效'),(2,'管理员组',1,'管理员组','有效'),(3,'会员组',0,'会员组','有效'),(4,'SVIP组',3,'SVIP组','有效'),(5,'VIP组',3,'VIP组','有效'),(6,'普通组',3,'普通组','有效');
/*!40000 ALTER TABLE `rbac_usergroup` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rbac_users`
--

DROP TABLE IF EXISTS `rbac_users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `rbac_users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `loginip` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `logintime` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `name` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `password` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `status` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `username` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `group_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK504B9DB6DCF7EC6` (`group_id`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rbac_users`
--

LOCK TABLES `rbac_users` WRITE;
/*!40000 ALTER TABLE `rbac_users` DISABLE KEYS */;
INSERT INTO `rbac_users` VALUES (1,'xinmowen@qq.com','','','超级管理员','123','有效','admin',1),(2,'xinmowen1@qq.com','','','管理员','123','有效','root',2),(3,'xinmowen1@qq.com','','','SVIP会员','123','有效','svip',4),(4,'xinmowen1@qq.com','','','VIP会员','123','有效','vip',5),(5,'xinmowen1@qq.com','','','普通会员','123','有效','huiyuan',6);
/*!40000 ALTER TABLE `rbac_users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sys_config`
--

DROP TABLE IF EXISTS `sys_config`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sys_config` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `value` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sys_config`
--

LOCK TABLES `sys_config` WRITE;
/*!40000 ALTER TABLE `sys_config` DISABLE KEYS */;
/*!40000 ALTER TABLE `sys_config` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sys_flinks`
--

DROP TABLE IF EXISTS `sys_flinks`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sys_flinks` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `remark` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `wsname` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `wsurl` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sys_flinks`
--

LOCK TABLES `sys_flinks` WRITE;
/*!40000 ALTER TABLE `sys_flinks` DISABLE KEYS */;
/*!40000 ALTER TABLE `sys_flinks` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sys_member`
--

DROP TABLE IF EXISTS `sys_member`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sys_member` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `grade` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `icon` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `isTJ` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `name` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `remark` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `username` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sys_member`
--

LOCK TABLES `sys_member` WRITE;
/*!40000 ALTER TABLE `sys_member` DISABLE KEYS */;
/*!40000 ALTER TABLE `sys_member` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sys_navlist`
--

DROP TABLE IF EXISTS `sys_navlist`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sys_navlist` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `icons` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `pid` int(11) NOT NULL,
  `tags` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `tid` int(11) NOT NULL,
  `title` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=27 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sys_navlist`
--

LOCK TABLES `sys_navlist` WRITE;
/*!40000 ALTER TABLE `sys_navlist` DISABLE KEYS */;
INSERT INTO `sys_navlist` VALUES (1,'icon-home',0,'home',1,'运行概要'),(2,'icon-align-justify',0,'article',2,'文章管理'),(3,'icon-align-justify',0,'article',3,'作品管理'),(4,'icon-tags',0,'programa',4,'分类管理'),(5,'icon-paste',0,'page',5,'页面管理'),(6,'',0,'',6,'作家管理'),(7,'icon-film',0,'',7,'媒体管理'),(8,'icon-bullhorn',0,'',8,'广告管理'),(9,'icon-group',0,'',9,'权限管理'),(10,'icon-cog',0,'',10,'系统管理'),(11,'icon-cog',2,'',21,'所有文章'),(12,'icon-cog',2,'',22,'文章上传'),(13,'icon-cog',2,'',31,'所有作品'),(14,'icon-cog',2,'',32,'作品上传'),(15,'icon-cog',4,'',41,'所有页面'),(16,'icon-cog',4,'',42,'添加页面'),(17,'icon-cog',6,'',61,'Banner管理'),(18,'icon-cog',6,'',62,'合作媒体管理'),(19,'icon-cog',8,'',81,'用户管理'),(20,'icon-cog',8,'',82,'用户组管理'),(21,'icon-cog',8,'',83,'角色管理'),(22,'icon-cog',9,'',91,'网站常规设置'),(23,'icon-cog',9,'',92,'菜单管理'),(24,'icon-cog',9,'',93,'友情链接管理'),(25,'icon-cog',9,'',94,'统计分析'),(26,'icon-cog',9,'',95,'系统日志');
/*!40000 ALTER TABLE `sys_navlist` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2014-03-13 14:53:47
