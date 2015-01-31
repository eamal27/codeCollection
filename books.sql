-- phpMyAdmin SQL Dump
-- version 4.2.11
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Jan 31, 2015 at 10:51 PM
-- Server version: 5.6.21
-- PHP Version: 5.6.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `codingBooks`
--

-- --------------------------------------------------------

--
-- Table structure for table `books`
--

CREATE TABLE IF NOT EXISTS `books` (
`id` int(11) NOT NULL,
  `Title` varchar(100) NOT NULL,
  `Author` varchar(100) NOT NULL,
  `Description` varchar(600) NOT NULL,
  `Languages` varchar(500) NOT NULL,
  `Rating` int(11) DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=46 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `books`
--

INSERT INTO `books` (`id`, `Title`, `Author`, `Description`, `Languages`, `Rating`) VALUES
(30, 'HTML', 'You', 'learn html in 3 minutes', ' html ', NULL),
(31, 'Build websites', 'me', 'learn the tools you need to develop websites', ' css html javascript ', NULL),
(32, 'Astronomy', 'Rupinder', 'Learn about stars and planets', ' bash java python ', NULL),
(40, 'How to talk to Roberto', 'Elias', 'fuck', ' java javascript jquery ', NULL),
(41, 'Java Programming', 'Jah Vang', 'learn Java and create android apps', ' java ', NULL),
(42, 'The Code', 'Unknown', 'This book will teach you how to encrypt and decrypt code in seconds. When you achieve this power, you will become one with zeros. You will become invincible. Read at your own risk.', ' curl lisp python ', NULL),
(43, 'Lisp', 'Lisp Master', 'Master Lisp programming in less than 3 months. Lisp is a very powerful programming language used by a large number of hackers. If you want to be an elite hacker, this is a must know. Lisp is a very powerful programming language used by a large number of hackers. If you want to be an elite hacker, this is a must know.\r\n\r\nPlease code responsibly.', ' lisp ', NULL),
(44, 'Elias: Do-it-yourself programming', 'Oracle', 'Learn how to program on your own', ' fortran matlab objectivec ', NULL),
(45, 'Safari', 'Apple', 'A stubborn web browser', ' objectivec ', NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `books`
--
ALTER TABLE `books`
 ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `books`
--
ALTER TABLE `books`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=46;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
