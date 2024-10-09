import { Module } from '@nestjs/common';
import InvoiceController from './controllers/invoice.controller';
import { InvoicesService } from './services/invoice.service';
import { PrismaModule } from '../shared/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [InvoiceController],
  providers: [InvoicesService],
})
export class InvoicesModule {}
