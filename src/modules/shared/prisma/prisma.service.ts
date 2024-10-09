import { INestApplication, Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  constructor() {
    super();
    console.log('PrismaService instantiated');
  }
  async onModuleInit() {
    await this.$connect();
    console.log('Connecting Prisma Client');
  }

  async enableShutdownHooks(app: INestApplication) {
    (this as any).$on('beforeExit', async () => {
      console.log('Disconnecting Prisma Client');
      await this.$disconnect();
      await app.close();
    });
  }
}
