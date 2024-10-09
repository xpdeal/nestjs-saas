import { Body, Controller, Post } from '@nestjs/common';
import { CreateTenantService } from '../service/tenants.service';
import TenantDto from '../entities/tenant.dto';

@Controller('tenants')
export class TenantsController {
  constructor(private readonly appService: CreateTenantService) {}

  @Post('create')
  async createTenant(@Body() dto: TenantDto): Promise<string | Error> {
    return this.appService.createTenant(dto);
  }
}
