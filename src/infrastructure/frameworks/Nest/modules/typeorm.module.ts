import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { mysqlOption } from '../../../../infrastructure/adapter/orm/type-orm/type-orm.config';

import { User } from '../user/entities/user.entity';
import { Author } from '../author/entities/author.entity';
import { Post } from '../post/entities/post.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([User, Author, Post]),
    TypeOrmModule.forRoot({
      ...mysqlOption,
      entities: [User, Author, Post],
      synchronize: false,
      autoLoadEntities: true,
    }),
  ],
})
export default class TypOrmRoot {}
