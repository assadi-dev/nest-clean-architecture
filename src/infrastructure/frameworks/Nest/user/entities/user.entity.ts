import { Field, Int, ObjectType } from '@nestjs/graphql';
import { UserInterface } from 'src/domain/interfaces/entity/user.interfaces';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Author } from '../../author/entities/author.entity';

@Entity()
@ObjectType()
export class User implements UserInterface {
  @PrimaryGeneratedColumn('increment')
  @Field(() => Int)
  id: number;
  @Column()
  @Field()
  email: string;
  @Column({ nullable: true })
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
