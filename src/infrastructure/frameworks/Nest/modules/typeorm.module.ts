import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { mysqlOption } from '../../../../infrastructure/adapter/orm/type-orm/type-orm.config';
import { join } from 'path';
import { User } from '../user/entities/user.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    TypeOrmModule.forRoot({
      ...mysqlOption,
      entities: [User],
      synchronize: false,
      autoLoadEntities: true,
    }),
  ],
})
export default class TypOrmRoot {}
