import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { mysqlOption } from 'src/infrastructure/adapter/type-orm/type-orm.config';
import { User } from '../user/entities/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot(mysqlOption),
    TypeOrmModule.forFeature([User]),
  ],
})
export default class TypOrmRoot {}
