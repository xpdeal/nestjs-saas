import { Controller, Get } from '@nestjs/common';
import { GetTenantService } from '../service/tenants.service';
import TenantDto from '../entities/tenant.dto';

@Controller('tenants')
export class TenantsController {
  constructor(private readonly appService: GetTenantService) {}

  @Get()
  getHello(dto: TenantDto): string {
    return this.appService.getHello(dto);
  }
}
