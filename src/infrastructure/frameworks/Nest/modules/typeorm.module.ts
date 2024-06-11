import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { mysqlOption } from 'src/infrastructure/adapter/type-orm/type-orm.config';
import { User } from '../user/entities/user.entity';
import { join } from 'path';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      ...mysqlOption,
      entities: [join(process.cwd(), '/src/**/*.entity{.ts}')],
      migrations: ['src/infrastructure/frameworks/Nest/migrations/*.{ts}'],
      synchronize: false,
      autoLoadEntities: false,
    }),
  ],
})
export default class TypOrmRoot {}
