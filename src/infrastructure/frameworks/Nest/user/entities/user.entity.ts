import { Field, Int, ObjectType } from '@nestjs/graphql';
import { UserInterface } from 'src/domain/interfaces/entity/user.interfaces';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
@ObjectType()
export class User implements UserInterface {
  @PrimaryGeneratedColumn('increment')
  @Field(() => Int)
  id: number;
  @Column()
  @Field({ nullable: true })
  email: string;
  @Column()
  @Field({ nullable: true })
  password: string;
  @CreateDateColumn({
    type: 'datetime',
    nullable: true,
  })
  @Field({ nullable: true })
  createdAt: Date;
  @UpdateDateColumn({
    type: 'datetime',
    nullable: true,
  })
  @Field({ nullable: true })
  updatedAt: Date;
}
