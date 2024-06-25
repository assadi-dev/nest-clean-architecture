import { Field, InputType, Int } from '@nestjs/graphql';
import { CreateAuthorInput } from './create-author.input';
import { PartialType } from '@nestjs/mapped-types';

@InputType()
export class UpdateAuthorInput extends PartialType(CreateAuthorInput) {
  @Field(() => Int)
  id: number;
}
