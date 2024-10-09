import { Module } from '@nestjs/common/decorators';
import { PlansController } from './controllers/plans.controller';
import { PlansService } from './services/plans.service';
import { PrismaService } from '../shared/prisma/prisma.service';

@Module({
  imports: [],
  controllers: [PlansController],
  providers: [PlansService, PrismaService],
})
export class PlansModule {}
