import { Injectable } from '@nestjs/common';
import { CreatePostInput } from './dto/create-post.input';
import { UpdatePostInput } from './dto/update-post.input';
import { container } from 'tsyringe';
import Logger from 'src/domain/port/logger/logger.port';
import CreatePostUseCase from 'src/domain/usecases/post/create-post.usecase';
import ListPostUseCase from 'src/domain/usecases/post/list-post.usecase';

@Injectable()
export class PostService {
  private logger: Logger;
  constructor() {
    this.logger = container.resolve<Logger>('Logger');
  }

  create(createPostInput: CreatePostInput) {
    const createPostUseCase = new CreatePostUseCase();
    return createPostUseCase.execute(createPostInput);
  }

  findAll() {
    const listPostUseCase = new ListPostUseCase();
    return listPostUseCase.execute();
  }

  findOne(id: number) {
    return `This action returns a #${id} post`;
  }

  update(id: number, updatePostInput: UpdatePostInput) {
    return `This action updates a #${id} post`;
  }

  remove(id: number) {
    return `This action removes a #${id} post`;
  }
}
