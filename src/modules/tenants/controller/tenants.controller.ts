import { Body, Controller, Post } from '@nestjs/common';
import { TenantsService } from '../service/tenants.service';
import TenantDto from '../entities/tenant.dto';

@Controller('tenants')
export class TenantsController {
  constructor(private readonly appService: TenantsService) {}

  @Post('create')
  async createTenant(@Body() dto: TenantDto): Promise<string | Error> {
    return this.appService.createTenant(dto);
  }
}
