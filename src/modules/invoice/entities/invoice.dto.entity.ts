import Entity from 'src/modules/shared/entities/entitie';

export default class InvoiceDto extends Entity {
  tenantId: number;
  planId: number;
  amount?: number;
  stage: string;
  dueAt?: Date;
  paidAt?: Date;
}
