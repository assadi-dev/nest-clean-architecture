import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserResolver } from './user.resolver';
import UserRepository from './entities/user.repository';

@Module({
  providers: [UserResolver, UserService],
})
export class UserModule {}
