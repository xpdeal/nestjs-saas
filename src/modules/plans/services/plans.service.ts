import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/modules/shared/prisma/prisma.service';
import PlanDto from '../entitites/plan.dto';

@Injectable()
export class PlansService {
  constructor(private readonly prisma: PrismaService) {}

  async createPlan(dto: PlanDto): Promise<string | Error> {
    try {
      const plan = await this.prisma.plans.create({
        data: {
          name: dto.name,
          billingCycle: dto.billingCycle,
          billingAmount: dto.billingAmount,
          billingUnit: dto.billingUnit,
        },
      });
      console.log(plan);
      return `Plan ${dto.name} created successfully!`;
    } catch (error) {
      throw new BadRequestException(error.toString());
    }
  }
}
