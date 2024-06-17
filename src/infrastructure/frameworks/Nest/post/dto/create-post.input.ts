import { Field, InputType, Int } from '@nestjs/graphql';
import { CreatePostInputInterface } from 'src/domain/interfaces/entity/post.interface';
import { UserInterface } from 'src/domain/interfaces/entity/user.interfaces';

@InputType()
export class CreatePostInput implements CreatePostInputInterface {
  @Field(() => Int)
  authorId?: number;
  @Field()
  title: string;
  @Field()
  content: string;
}
