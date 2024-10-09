-- AddForeignKey
ALTER TABLE `Invoices` ADD CONSTRAINT `Invoices_tenantId_fkey` FOREIGN KEY (`tenantId`) REFERENCES `Tenants`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
