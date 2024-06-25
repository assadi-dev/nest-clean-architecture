import { PostInterface } from 'src/domain/interfaces/entity/post.interface';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
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
  @ManyToOne(() => Author, (author) => author.posts)
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
