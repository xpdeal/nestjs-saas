import { Body, Controller, Post } from '@nestjs/common';
import { InvoicesService } from '../services/invoice.service';
import InvoiceDto from '../entities/invoice.dto.entity';

@Controller('invoices')
export default class InvoiceController {
  constructor(private readonly invoiceService: InvoicesService) {}

  @Post('create')
  async createInvoice(@Body() dto: InvoiceDto): Promise<string | Error> {
    return await this.invoiceService.createInvoice(dto);
  }
}
