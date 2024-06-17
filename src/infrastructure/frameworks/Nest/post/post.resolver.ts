import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { PostService } from './post.service';
import { CreatePostInput } from './dto/create-post.input';
import { UpdatePostInput } from './dto/update-post.input';
import { Post } from './entities/post.entity';

@Resolver('Post')
export class PostResolver {
  constructor(private readonly postService: PostService) {}

  @Mutation(() => Post, { name: 'createPost' })
  create(@Args('createPostInput') createPostInput: CreatePostInput) {
    return this.postService.create(createPostInput);
  }

  @Query(() => [Post], { name: 'FindAllPost' })
  findAll() {
    return this.postService.findAll();
  }
  /* 
  @Query(() => Post)
  findOne(@Args('id') id: number) {
    return this.postService.findOne(id);
  }

  @Mutation(() => Post)
  update(@Args('updatePostInput') updatePostInput: UpdatePostInput) {
    return this.postService.update(updatePostInput.id, updatePostInput);
  }

  @Mutation(() => Boolean)
  remove(@Args('id') id: number) {
    return this.postService.remove(id);
  } */
}
