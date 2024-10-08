import { Injectable } from '@nestjs/common';
import TenantDto from '../entities/tenant.dto';

@Injectable()
export class GetTenantService {
  getHello(dto: TenantDto): string {
    return `Hello From Tenant ${dto.email}!`;
  }
}
