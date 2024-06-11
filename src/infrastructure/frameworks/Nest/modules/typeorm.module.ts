import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { mysqlOption } from 'src/infrastructure/adapter/type-orm/type-orm.config';
import { join } from 'path';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      ...mysqlOption,
      entities: [join(process.cwd(), '/src/**/*.entity{.ts}')],
      synchronize: false,
      autoLoadEntities: true,
    }),
  ],
})
export default class TypOrmRoot {}
