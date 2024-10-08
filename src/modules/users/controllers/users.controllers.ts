import { Controller, Get } from '@nestjs/common';
import { GetUsersService } from '../services/getUsers.service';

@Controller('users')
export class UsersController {
  constructor(private readonly appService: GetUsersService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
