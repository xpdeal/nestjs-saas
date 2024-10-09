import { Body, Controller, Post } from '@nestjs/common';
import { PlansService } from '../services/plans.service';
import PlanDto from '../entitites/plan.dto';

@Controller('plans')
export class PlansController {
  constructor(private readonly plansService: PlansService) {}

  @Post('create')
  async createPlan(@Body() dto: PlanDto): Promise<string | Error> {
    return await this.plansService.createPlan(dto);
  }
}
