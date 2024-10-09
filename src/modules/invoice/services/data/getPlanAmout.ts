import { NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/modules/shared/prisma/prisma.service';

export default async function getPlanAmount(
  plan: number,
  prisma: PrismaService,
): Promise<number> {
  try {
    const { billingAmount } = await prisma.plans.findUnique({
      select: { billingAmount: true },
      where: { id: plan },
    });

    if (!billingAmount) {
      throw new Error('Plan not found');
    }

    return billingAmount;
  } catch (error) {
    throw new NotFoundException(error.toString());
  }
}
