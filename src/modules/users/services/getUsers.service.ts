import { Injectable } from '@nestjs/common';

@Injectable()
export class GetUsersService {
  getHello(): string {
    return 'Hello From User!';
  }
}
