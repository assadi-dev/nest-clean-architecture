import { Field, Int, ObjectType } from '@nestjs/graphql';
import { AuthorInterface } from 'src/domain/interfaces/entity/author.interface';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { User } from '../../user/entities/user.entity';
import { Post } from '../../post/entities/post.entity';

@Entity()
@ObjectType()
export class Author implements AuthorInterface {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;
  @Column()
  @Field()
  email: string;
  @Column()
  @Field()
  lastName: string;
  @Column()
  @Field()
  firstName: string;
  @Column()
  @Field()
  pseudo: string;
  @Column()
  @Field()
  bio: string;
  @Column()
  @Field()
  avatar: string;
  @Column()
  @Field()
  dateOfBirth: Date;
  @OneToOne(() => Author, { nullable: true })
  @JoinColumn()
  author: User;
  @OneToMany(() => Post, (post) => post.author)
  @Field(() => [Post], { nullable: true })
  posts: Post[];
  @CreateDateColumn()
  @Field()
  createdAt: Date;
  @UpdateDateColumn()
  @Field()
  updatedAt: Date;
  @DeleteDateColumn({ nullable: true })
  @Field()
  deletedAt?: Date;
}
