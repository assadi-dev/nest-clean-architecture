import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserResolver } from './user.resolver';
import { User } from './entities/user.entity';
import UserRepository from 'src/infrastructure/adapter/type-orm/repositories/user.repository';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [UserResolver, UserService, UserRepository],
})
export class UserModule {}
