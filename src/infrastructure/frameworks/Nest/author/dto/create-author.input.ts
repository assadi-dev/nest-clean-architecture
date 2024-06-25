import { Field, InputType, Int } from '@nestjs/graphql';
import { AuthorCreateInputDto } from 'src/domain/usecases/author/dto/author.dto';

@InputType()
export class CreateAuthorInput implements AuthorCreateInputDto {
  @Field()
  lastName?: string;
  @Field()
  firstName?: string;
  @Field()
  pseudo?: string;
  @Field()
  bio?: string;
  @Field({ nullable: true })
  avatar?: string;
  @Field()
  dateOfBirth?: Date;
  @Field(() => Int)
  userId?: number;
}
