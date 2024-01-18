-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 27, 2023 at 11:53 AM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `chanchito 2.0`
--

-- --------------------------------------------------------

--
-- Table structure for table `consultasencurso`
--

CREATE TABLE `consultasencurso` (
  `id` int(11) NOT NULL,
  `solicitud_id` int(11) NOT NULL,
  `fecha_inicio` datetime DEFAULT current_timestamp(),
  `fecha_fin` datetime DEFAULT NULL,
  `notas` text DEFAULT NULL,
  `usuario_id` int(11) DEFAULT NULL,
  `diagnostico` text DEFAULT NULL,
  `tratamiento` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `consultasencurso`
--

INSERT INTO `consultasencurso` (`id`, `solicitud_id`, `fecha_inicio`, `fecha_fin`, `notas`, `usuario_id`, `diagnostico`, `tratamiento`) VALUES
(16, 29, '2023-07-27 03:34:43', NULL, 'Malestar', 14, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `historialconsultas`
--

CREATE TABLE `historialconsultas` (
  `id` int(11) NOT NULL,
  `consulta_id` int(11) NOT NULL,
  `diagnostico` text DEFAULT NULL,
  `tratamiento` text DEFAULT NULL,
  `fecha_inicio` date DEFAULT NULL,
  `usuario_id` int(11) DEFAULT NULL,
  `paciente_id` int(11) DEFAULT NULL,
  `fecha_fin` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `historialconsultas`
--

INSERT INTO `historialconsultas` (`id`, `consulta_id`, `diagnostico`, `tratamiento`, `fecha_inicio`, `usuario_id`, `paciente_id`, `fecha_fin`) VALUES
(12, 15, 'Loco mujeriego', 'Dejar de serlo', '2023-07-27', 14, 35, '2023-07-27');

-- --------------------------------------------------------

--
-- Table structure for table `paciente`
--

CREATE TABLE `paciente` (
  `id` int(11) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `raza` varchar(50) DEFAULT NULL,
  `peso` decimal(4,2) DEFAULT NULL,
  `edad` int(11) DEFAULT NULL,
  `notas` text DEFAULT NULL,
  `especie` enum('perro','gato','otro') DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `paciente`
--

INSERT INTO `paciente` (`id`, `nombre`, `raza`, `peso`, `edad`, `notas`, `especie`) VALUES
(35, 'Jose Portillo', 'Mujeriego', '52.00', 21, 'Miope, Genesis.', 'perro'),
(36, 'Hainer', 'aw', '1.00', 2, '5', 'perro'),
(37, 'Triton', 'Husky', '10.00', 2, 'Malestar', 'perro');

-- --------------------------------------------------------

--
-- Table structure for table `rol`
--

CREATE TABLE `rol` (
  `rol_id` int(11) NOT NULL,
  `nombre` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `rol`
--

INSERT INTO `rol` (`rol_id`, `nombre`) VALUES
(1, 'usuario'),
(2, 'veterinario');

-- --------------------------------------------------------

--
-- Table structure for table `solicitudesconsulta`
--

CREATE TABLE `solicitudesconsulta` (
  `id` int(11) NOT NULL,
  `paciente_id` int(11) NOT NULL,
  `usuario_id` int(11) NOT NULL,
  `fecha_solicitud` datetime DEFAULT current_timestamp(),
  `notas` text DEFAULT NULL,
  `nombre` varchar(50) DEFAULT NULL,
  `raza` varchar(25) DEFAULT NULL,
  `peso` varchar(25) DEFAULT NULL,
  `edad` int(11) DEFAULT NULL,
  `especie` varchar(50) DEFAULT NULL,
  `estado` enum('pendiente','en curso','finalizada') NOT NULL DEFAULT 'pendiente'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `solicitudesconsulta`
--

INSERT INTO `solicitudesconsulta` (`id`, `paciente_id`, `usuario_id`, `fecha_solicitud`, `notas`, `nombre`, `raza`, `peso`, `edad`, `especie`, `estado`) VALUES
(29, 37, 14, '2023-07-27 07:33:24', 'Malestar', NULL, NULL, NULL, NULL, NULL, 'en curso');

--
-- Triggers `solicitudesconsulta`
--
DELIMITER $$
CREATE TRIGGER `after_solicitud_accepted` AFTER UPDATE ON `solicitudesconsulta` FOR EACH ROW BEGIN
   IF NEW.estado = 'en curso' THEN
      INSERT INTO consultasencurso (solicitud_id, fecha_inicio, usuario_id, notas)
    VALUES (NEW.id, NOW(), NEW.usuario_id, NEW.notas);
   END IF;
END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `usuario`
--

CREATE TABLE `usuario` (
  `id` int(11) NOT NULL,
  `nombre_completo` varchar(50) DEFAULT NULL,
  `email` varchar(100) NOT NULL,
  `telefono` varchar(15) DEFAULT NULL,
  `password` varchar(100) NOT NULL,
  `rol_id` int(11) NOT NULL,
  `nombre_usuario` varchar(30) DEFAULT NULL,
  `genero` enum('hombre','mujer','otros') DEFAULT NULL,
  `pregunta_seguridad` varchar(50) DEFAULT NULL,
  `respuesta_seguridad` varchar(50) DEFAULT NULL,
  `intentos_fallidos` int(11) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `usuario`
--

INSERT INTO `usuario` (`id`, `nombre_completo`, `email`, `telefono`, `password`, `rol_id`, `nombre_usuario`, `genero`, `pregunta_seguridad`, `respuesta_seguridad`, `intentos_fallidos`) VALUES
(14, 'Lisandro Hernandez', 'lisandro@gmail.com', '04126901778', '&)62J)@QPNIUW$DYcmRv', 1, 'lisandrohr', 'hombre', 'Nombre de tu primer amor', 'Andrea', 0),
(15, 'La Sirenita', 'sirenita@gmail.com', '041252', '123', 2, 'sirena69', 'mujer', 'Apodo de la infancia', 'Sirenita', 0),
(16, 'Juan David', 'juan@gmail.com', '4129501241', '123', 1, 'Juan', 'hombre', 'Nombre de tu primera mascota', 'Juan', 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `consultasencurso`
--
ALTER TABLE `consultasencurso`
  ADD PRIMARY KEY (`id`),
  ADD KEY `usuario_id` (`usuario_id`),
  ADD KEY `FK_consultasencurso_solicitudesconsulta` (`solicitud_id`);

--
-- Indexes for table `historialconsultas`
--
ALTER TABLE `historialconsultas`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_historialconsultas_solicitudesconsulta` (`consulta_id`);

--
-- Indexes for table `paciente`
--
ALTER TABLE `paciente`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `rol`
--
ALTER TABLE `rol`
  ADD PRIMARY KEY (`rol_id`);

--
-- Indexes for table `solicitudesconsulta`
--
ALTER TABLE `solicitudesconsulta`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_paciente_id` (`paciente_id`),
  ADD KEY `fk_solicitudesconsulta_usuario` (`usuario_id`);

--
-- Indexes for table `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`id`),
  ADD KEY `rol_id` (`rol_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `consultasencurso`
--
ALTER TABLE `consultasencurso`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `historialconsultas`
--
ALTER TABLE `historialconsultas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `paciente`
--
ALTER TABLE `paciente`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=38;

--
-- AUTO_INCREMENT for table `rol`
--
ALTER TABLE `rol`
  MODIFY `rol_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `solicitudesconsulta`
--
ALTER TABLE `solicitudesconsulta`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;

--
-- AUTO_INCREMENT for table `usuario`
--
ALTER TABLE `usuario`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `consultasencurso`
--
ALTER TABLE `consultasencurso`
  ADD CONSTRAINT `FK_consultasencurso_solicitudesconsulta` FOREIGN KEY (`solicitud_id`) REFERENCES `solicitudesconsulta` (`id`),
  ADD CONSTRAINT `consultasencurso_ibfk_1` FOREIGN KEY (`solicitud_id`) REFERENCES `solicitudesconsulta` (`id`),
  ADD CONSTRAINT `consultasencurso_ibfk_2` FOREIGN KEY (`usuario_id`) REFERENCES `usuario` (`id`);

--
-- Constraints for table `solicitudesconsulta`
--
ALTER TABLE `solicitudesconsulta`
  ADD CONSTRAINT `fk_paciente_id` FOREIGN KEY (`paciente_id`) REFERENCES `paciente` (`id`),
  ADD CONSTRAINT `fk_solicitudesconsulta_usuario` FOREIGN KEY (`usuario_id`) REFERENCES `usuario` (`id`),
  ADD CONSTRAINT `solicitudesconsulta_ibfk_1` FOREIGN KEY (`paciente_id`) REFERENCES `paciente` (`id`),
  ADD CONSTRAINT `solicitudesconsulta_ibfk_2` FOREIGN KEY (`usuario_id`) REFERENCES `usuario` (`id`);

--
-- Constraints for table `usuario`
--
ALTER TABLE `usuario`
  ADD CONSTRAINT `usuario_ibfk_1` FOREIGN KEY (`rol_id`) REFERENCES `rol` (`rol_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
