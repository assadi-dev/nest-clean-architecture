import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { mysqlOption } from '../../../../infrastructure/adapter/orm/type-orm/type-orm.config';
import { User } from '../user/entities/user.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    TypeOrmModule.forRoot({
      ...mysqlOption,
      entities: [User],
      synchronize: false,
      autoLoadEntities: false,
    }),
  ],
})
export default class TypOrmRoot {}
