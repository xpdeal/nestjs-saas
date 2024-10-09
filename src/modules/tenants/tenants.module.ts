import { Module } from '@nestjs/common';
import { TenantsController } from './controller/tenants.controller';
import { CreateTenantService } from './service/tenants.service';
import { PrismaService } from '../shared/prisma/prisma.service';

@Module({
  imports: [],
  controllers: [TenantsController],
  providers: [CreateTenantService, PrismaService],
})
export class TenantsModule {}
