-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 14-07-2024 a las 19:20:42
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `restaurant_db`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `restaurants`
--

CREATE TABLE `restaurants` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `province` varchar(255) NOT NULL,
  `latitude` float NOT NULL,
  `longitude` float NOT NULL,
  `phone` varchar(15) DEFAULT NULL,
  `website` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `restaurants`
--

INSERT INTO `restaurants` (`id`, `name`, `address`, `province`, `latitude`, `longitude`, `phone`, `website`, `image`) VALUES
(3, 'restaurante 2', 'direccion 2', 'buenos aires', 10, 15, '36699777', 'http://www.pepe2.com.ar', 'r2.jpg'),
(5, 'restaurante 3', 'direccion 3', 'buenos aires', 10, 15, '36699777', 'http://www.pepe2.com.ar', 'r4.jpg'),
(6, 'restaurante 4', 'direccion 4', 'buenos aires', 15, 15, '36699777', 'http://www.pepe4.com.ar', 'r5.jpg'),
(7, 'restaurante 5', 'direccion 5', 'buenos aires', 15, 15, '36699777', 'http://www.pepe4.com.ar', 'r6.jpg'),
(8, 'restaurante 6', 'direccion 6', 'buenos aires', 15, 15, '36699777', 'http://www.pepe4.com.ar', 'r7.jpg'),
(9, 'restaurante 7', 'direccion 7', 'buenos aires', 15, 15, '36699777', 'http://www.pepe4.com.ar', 'r8.jpg'),
(10, 'restaurante 8', 'direccion 8', 'buenos aires', 15, 15, '36699777', 'http://www.pepe4.com.ar', 'r9.jpg');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `restaurants`
--
ALTER TABLE `restaurants`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `restaurants`
--
ALTER TABLE `restaurants`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
