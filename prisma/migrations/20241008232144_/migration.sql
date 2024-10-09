-- CreateTable
CREATE TABLE `Tenants` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `active` BOOLEAN NOT NULL DEFAULT false,
    `uuid` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `branch` VARCHAR(191) NULL,
    `domain` VARCHAR(191) NOT NULL,
    `database` VARCHAR(191) NOT NULL,
    `stage` ENUM('open', 'waiting', 'progress', 'staging', 'production', 'failed') NOT NULL DEFAULT 'open',
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NULL,
    `updatedBy` VARCHAR(191) NOT NULL,
    `softDeleteAt` DATETIME(3) NULL,

    UNIQUE INDEX `Tenants_uuid_key`(`uuid`),
    UNIQUE INDEX `Tenants_domain_key`(`domain`),
    UNIQUE INDEX `Tenants_database_key`(`database`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Users` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NULL,
    `softDeleteAt` DATETIME(3) NULL,

    UNIQUE INDEX `Users_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
