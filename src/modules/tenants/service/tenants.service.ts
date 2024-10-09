import { BadRequestException, Injectable } from '@nestjs/common';
import TenantDto from '../entities/tenant.dto';
import { PrismaService } from 'src/modules/shared/prisma/prisma.service';

@Injectable()
export class TenantsService {
  constructor(private readonly prisma: PrismaService) {}

  async createTenant(dto: TenantDto): Promise<string | Error> {
    try {
      const user = await this.prisma.tenants.create({
        data: {
          name: dto.name,
          domain: dto.domain,
          database: dto.database,
          updatedBy: dto.updatedBy,
        },
      });
      return `Tenant ${user.name} created successfully!`;
    } catch (error) {
      throw new BadRequestException(error.toString());
    }
  }
}
