import Entity from 'src/modules/shared/entities/entitie';

export default class PlanDto extends Entity {
  name: string;
  billingCycle: string;
  billingAmount: number;
  billingUnit: string;
}
