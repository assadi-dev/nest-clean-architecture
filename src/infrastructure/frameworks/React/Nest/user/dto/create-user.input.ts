import { Field, InputType } from '@nestjs/graphql';
import { CreateUserInputInterface } from 'src/domain/interfaces/entity/user.interfaces';

@InputType()
export class CreateUserInput implements CreateUserInputInterface {
  @Field()
  email: string;
  @Field()
  password: string;
}
