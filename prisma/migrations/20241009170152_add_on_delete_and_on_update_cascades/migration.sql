-- DropForeignKey
ALTER TABLE `Invoices` DROP FOREIGN KEY `Invoices_planId_fkey`;

-- DropForeignKey
ALTER TABLE `Invoices` DROP FOREIGN KEY `Invoices_tenantId_fkey`;

-- AddForeignKey
ALTER TABLE `Invoices` ADD CONSTRAINT `Invoices_tenantId_fkey` FOREIGN KEY (`tenantId`) REFERENCES `Tenants`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Invoices` ADD CONSTRAINT `Invoices_planId_fkey` FOREIGN KEY (`planId`) REFERENCES `Plans`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
