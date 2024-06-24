import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import TypOrmRoot from './modules/typeorm.module';
import { ConfigModule } from '@nestjs/config';
import GraphQLRoot from './modules/graphql.module';
import { UserModule } from './user/user.module';
import { CoreDependencies } from './modules/core.module';
import { PostModule } from './post/post.module';
import { AuthorModule } from './author/author.module';

@Module({
  imports: [
    CoreDependencies,
    ConfigModule.forRoot(),
    TypOrmRoot,
    GraphQLRoot,
    UserModule,
    PostModule,
    AuthorModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
