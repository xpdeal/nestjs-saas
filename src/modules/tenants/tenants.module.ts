import { Module } from '@nestjs/common';
import { TenantsController } from './controller/tenants.controller';
import { TenantsService } from './service/tenants.service';
import { PrismaService } from '../shared/prisma/prisma.service';

@Module({
  imports: [],
  controllers: [TenantsController],
  providers: [TenantsService, PrismaService],
})
export class TenantsModule {}
