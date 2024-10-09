-- CreateTable
CREATE TABLE `Plans` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `billingCycle` VARCHAR(191) NOT NULL,
    `billingAmount` DOUBLE NOT NULL,
    `billingUnit` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NULL,
    `softDeleteAt` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Invoices` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `tenantId` INTEGER NOT NULL,
    `planId` INTEGER NOT NULL,
    `amount` DOUBLE NOT NULL,
    `stage` VARCHAR(191) NOT NULL,
    `dueAt` DATETIME(3) NULL,
    `paidAt` DATETIME(3) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NULL,
    `softDeleteAt` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Invoices` ADD CONSTRAINT `Invoices_planId_fkey` FOREIGN KEY (`planId`) REFERENCES `Plans`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
