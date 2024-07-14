-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 14-07-2024 a las 19:20:55
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
-- Base de datos: `formulario`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `formulario`
--

CREATE TABLE `formulario` (
  `id` int(11) NOT NULL,
  `numero_consulta` varchar(20) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `motivo_contacto` varchar(50) NOT NULL,
  `serv_utilizado` varchar(50) NOT NULL,
  `ubicacion` varchar(50) NOT NULL,
  `mensaje` text NOT NULL,
  `newsletter` varchar(10) DEFAULT NULL,
  `enviado` datetime DEFAULT NULL,
  `leido` tinyint(1) DEFAULT 0
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `formulario`
--

INSERT INTO `formulario` (`id`, `numero_consulta`, `nombre`, `email`, `motivo_contacto`, `serv_utilizado`, `ubicacion`, `mensaje`, `newsletter`, `enviado`, `leido`) VALUES
(10, 'C002', 'Ana', 'zerogluten.adm@gmail.com', 'consulta', 'Tienda online', 'Buenos Aires - GBA', 'Me llega el mail de confirmacion? prueba 1', 'Sí', '2024-07-11 22:22:05', 0),
(9, 'C001', 'Paloma', 'palomisc9@gmail.com', 'Opinion', 'Tienda online', 'Buenos Aires - GBA', 'Holaa! me encanta la pagina, sigan asi :)', 'Sí', '2024-07-11 22:21:14', 0);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `formulario`
--
ALTER TABLE `formulario`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `formulario`
--
ALTER TABLE `formulario`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
