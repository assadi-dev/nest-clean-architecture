import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import TypOrmRoot from './modules/typeorm.module';
import { ConfigModule } from '@nestjs/config';
import GraphQLRoot from './modules/graphql.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [ConfigModule.forRoot(), TypOrmRoot, GraphQLRoot, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
