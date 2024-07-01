-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 01, 2024 at 03:51 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `nodejs_project`
--

-- --------------------------------------------------------

--
-- Table structure for table `allcodes`
--

CREATE TABLE `allcodes` (
  `id` int(11) NOT NULL,
  `key` varchar(255) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `valueEn` varchar(255) DEFAULT NULL,
  `valueVi` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `bookings`
--

CREATE TABLE `bookings` (
  `id` int(11) NOT NULL,
  `doctorId` int(11) DEFAULT NULL,
  `clinicId` int(11) DEFAULT NULL,
  `specialtyId` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `clinics`
--

CREATE TABLE `clinics` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `statusId` varchar(255) DEFAULT NULL,
  `doctorId` int(11) DEFAULT NULL,
  `patientId` int(11) DEFAULT NULL,
  `date` datetime DEFAULT NULL,
  `timeType` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `doctor_clinic_specialty`
--

CREATE TABLE `doctor_clinic_specialty` (
  `id` int(11) NOT NULL,
  `statusId` varchar(255) DEFAULT NULL,
  `doctorId` int(11) DEFAULT NULL,
  `patientId` int(11) DEFAULT NULL,
  `date` datetime DEFAULT NULL,
  `timeType` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `histories`
--

CREATE TABLE `histories` (
  `id` int(11) NOT NULL,
  `patientId` int(11) DEFAULT NULL,
  `doctorId` int(11) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `file` text DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `schedules`
--

CREATE TABLE `schedules` (
  `id` int(11) NOT NULL,
  `currentNumber` int(11) DEFAULT NULL,
  `maxtNumber` int(11) DEFAULT NULL,
  `date` datetime DEFAULT NULL,
  `timeType` varchar(255) DEFAULT NULL,
  `doctorId` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `sequelizemeta`
--

CREATE TABLE `sequelizemeta` (
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `sequelizemeta`
--

INSERT INTO `sequelizemeta` (`name`) VALUES
('migration-create-booking.js'),
('migration-create-clinic.js'),
('migration-create-doctor-clinic-specialty.js'),
('migration-create-history.js'),
('migration-create-schedule.js'),
('migration-create-specialty.js'),
('migration-create-users.js'),
('migrations-allcode.js');

-- --------------------------------------------------------

--
-- Table structure for table `specialties`
--

CREATE TABLE `specialties` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `firstName` varchar(255) DEFAULT NULL,
  `lastName` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `phonenumber` varchar(255) DEFAULT NULL,
  `gender` tinyint(1) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `roleId` varchar(255) DEFAULT NULL,
  `positionId` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `firstName`, `lastName`, `email`, `password`, `address`, `phonenumber`, `gender`, `image`, `roleId`, `positionId`, `createdAt`, `updatedAt`) VALUES
(14, 'nguyen', 'son1', 'xson25820021@gmail.com', '$2a$10$29l81pVE4eV.5HvBDoJrWuV6UnzRFP7vYEGCp32ggT1XVUfqF6OIC', 'ha noi', '12312412412', 1, NULL, '1', NULL, '2024-06-09 23:38:57', '2024-06-09 23:38:57'),
(15, 'nguyen', 'son12321', 'xson258200221@gmail.com', '$2a$10$ct.UBLrg4Itf13CBvtn2J.2VCMCTt6VKPiya8XDZ5pBLMJfMiqtkm', 'ha noi', '312312312', 1, NULL, '1', NULL, '2024-06-09 16:40:41', '2024-06-09 16:40:41'),
(16, 'nguyen', 'son1', 'xson25820@gmail.com', '$2a$10$YMjJlx2f.fQpvqJTTD6Ueelh9wAU4ojvTxD/NN1HLxQmuF9i4YDGq', 'ha noi', '12312312', 1, NULL, '1', NULL, '2024-06-09 23:42:01', '2024-06-09 23:42:01'),
(17, '1', '2', 'xson2582002@gmail.com', '$2a$10$KoZ4OOkRLA6EaYl5b7iAqOurXwmLY24b4xCeVmgXohbkKHi0D5V/q', '1', NULL, 1, NULL, '2', NULL, '2024-06-11 23:04:47', '2024-06-11 23:04:47'),
(18, '213', '312', 'xson258@gmail.com', '$2a$10$KoZ4OOkRLA6EaYl5b7iAqOurXwmLY24b4xCeVmgXohbkKHi0D5V/q', '312', NULL, 1, NULL, '2', NULL, '2024-06-11 23:04:54', '2024-06-21 20:22:48'),
(28, '111', '111', 'admin@gmail.com', '$2a$10$WzhJcPGAb9MGtzIy8L6hU.D3i4X6qFqoeaTYWpsR1E7Jn/sHTMxAK', '111', NULL, 0, NULL, NULL, NULL, '2024-06-21 20:41:49', '2024-06-21 20:41:49');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `allcodes`
--
ALTER TABLE `allcodes`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `bookings`
--
ALTER TABLE `bookings`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `clinics`
--
ALTER TABLE `clinics`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `doctor_clinic_specialty`
--
ALTER TABLE `doctor_clinic_specialty`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `histories`
--
ALTER TABLE `histories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `schedules`
--
ALTER TABLE `schedules`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sequelizemeta`
--
ALTER TABLE `sequelizemeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `specialties`
--
ALTER TABLE `specialties`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `allcodes`
--
ALTER TABLE `allcodes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `bookings`
--
ALTER TABLE `bookings`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `clinics`
--
ALTER TABLE `clinics`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `doctor_clinic_specialty`
--
ALTER TABLE `doctor_clinic_specialty`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `histories`
--
ALTER TABLE `histories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `schedules`
--
ALTER TABLE `schedules`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `specialties`
--
ALTER TABLE `specialties`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
