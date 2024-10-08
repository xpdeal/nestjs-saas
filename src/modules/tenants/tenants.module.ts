import { Module } from '@nestjs/common';
import { TenantsController } from './controller/tenants.controller';
import { GetTenantService } from './service/tenants.service';

@Module({
  imports: [],
  controllers: [TenantsController],
  providers: [GetTenantService],
})
export class TenantsModule {}
