import { Module } from '@nestjs/common';
import { UsersController } from './controllers/users.controllers';
import { GetUsersService } from './services/getUsers.service';

@Module({
  imports: [],
  controllers: [UsersController],
  providers: [GetUsersService],
})
export class UsersModule {}
