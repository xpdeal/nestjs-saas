import { Injectable } from '@nestjs/common';
import { log } from 'console';
import { PrismaService } from 'src/modules/shared/prisma/prisma.service';
import InvoiceDto from '../entities/invoice.dto.entity';
import getPlanAmount from './data/getPlanAmout';

@Injectable()
export class InvoicesService {
  constructor(private readonly prisma: PrismaService) {}

  async createInvoice(dto: InvoiceDto): Promise<string | Error> {
    try {
      const { tenantId, planId, stage, dueAt } = dto;
      let { amount } = dto;

      if (!amount) {
        amount = await getPlanAmount(planId, this.prisma);
      }

      const invoice = await this.prisma.invoices.create({
        data: {
          tenantId,
          planId,
          amount,
          stage,
          dueAt,
        },
      });
      log(invoice);
      return `Invoice created successfully!`;
    } catch (error) {
      throw new Error(error.toString());
    }
  }
}
