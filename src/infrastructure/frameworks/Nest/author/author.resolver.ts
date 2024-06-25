import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { AuthorService } from './author.service';
import { CreateAuthorInput } from './dto/create-author.input';
import { UpdateAuthorInput } from './dto/update-author.input';
import { Author } from './entities/author.entity';

@Resolver('Author')
export class AuthorResolver {
  constructor(private readonly authorService: AuthorService) {}

  @Mutation(() => Author, { name: 'createAuthor' })
  create(@Args('createAuthorInput') createAuthorInput: CreateAuthorInput) {
    return this.authorService.create(createAuthorInput);
  }

  @Query(() => [Author], { name: 'findAllAuthor' })
  findAll() {
    return this.authorService.findAll();
  }

  @Query(() => Author, { name: 'findAuthor' })
  findOne(@Args('id') id: number) {
    return this.authorService.findOne(id);
  }

  @Mutation(() => Author, { name: 'updateAuthor' })
  update(@Args('updateAuthorInput') updateAuthorInput: UpdateAuthorInput) {
    return this.authorService.update(updateAuthorInput.id, updateAuthorInput);
  }

  @Mutation(() => Author, { name: 'removeAuthor' })
  remove(@Args('id') id: number) {
    return this.authorService.remove(id);
  }
}
