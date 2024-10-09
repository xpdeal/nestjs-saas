import { Module } from '@nestjs/common/decorators';
import { PlansController } from './controllers/plans.controller';
import { PlansService } from './services/plans.service';
import { PrismaModule } from '../shared/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [PlansController],
  providers: [PlansService],
})
export class PlansModule {}
