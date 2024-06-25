import { CreatePostInput } from './create-post.input';
import { PartialType } from '@nestjs/mapped-types';
import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class UpdatePostInput extends PartialType(CreatePostInput) {
  @Field(() => Int)
  id: number;
}
