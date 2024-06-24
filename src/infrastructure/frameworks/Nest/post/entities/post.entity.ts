import { PostInterface } from 'src/domain/interfaces/entity/post.interface';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { User } from '../../user/entities/user.entity';
import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Author } from '../../author/entities/author.entity';

@Entity()
@ObjectType()
export class Post implements PostInterface {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;
  @Column()
  @Field()
  title: string;
  @Column()
  @Field()
  content: string;
  @OneToOne(() => Author, { nullable: true })
  @JoinColumn()
  @Field(() => Author, { nullable: true })
  author: Author;
  @CreateDateColumn({ nullable: true })
  @Field({ nullable: true })
  createdAt: Date;
  @UpdateDateColumn({ nullable: true })
  @Field({ nullable: true })
  updatedAt: Date;
  @DeleteDateColumn({ nullable: true })
  @Field({ nullable: true })
  deletedAt?: Date;
}
