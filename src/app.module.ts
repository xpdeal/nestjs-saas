import { Module } from '@nestjs/common';
import { UsersModule } from './modules/users/users.module';
import { TenantsModule } from './modules/tenants/tenants.module';
import { PlansModule } from './modules/plans/plans.module';

@Module({
  imports: [UsersModule, TenantsModule, PlansModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
