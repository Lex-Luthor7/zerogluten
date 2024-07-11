-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 11-07-2024 a las 22:26:56
-- Versión del servidor: 8.3.0
-- Versión de PHP: 8.2.18

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `form_contacto_db`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `formulario`
--

DROP TABLE IF EXISTS `formulario`;
CREATE TABLE IF NOT EXISTS `formulario` (
  `id` int NOT NULL AUTO_INCREMENT,
  `numero_consulta` varchar(20) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `motivo_contacto` varchar(50) NOT NULL,
  `serv_utilizado` varchar(50) NOT NULL,
  `ubicacion` varchar(50) NOT NULL,
  `mensaje` text NOT NULL,
  `newsletter` varchar(10) DEFAULT NULL,
  `enviado` datetime DEFAULT NULL,
  `leido` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `formulario`
--

INSERT INTO `formulario` (`id`, `numero_consulta`, `nombre`, `email`, `motivo_contacto`, `serv_utilizado`, `ubicacion`, `mensaje`, `newsletter`, `enviado`, `leido`) VALUES
(10, 'C002', 'Ana', 'zerogluten.adm@gmail.com', 'consulta', 'Tienda online', 'Buenos Aires - GBA', 'Me llega el mail de confirmacion? prueba 1', 'Sí', '2024-07-11 22:22:05', 0),
(9, 'C001', 'Paloma', 'palomisc9@gmail.com', 'Opinion', 'Tienda online', 'Buenos Aires - GBA', 'Holaa! me encanta la pagina, sigan asi :)', 'Sí', '2024-07-11 22:21:14', 0);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
