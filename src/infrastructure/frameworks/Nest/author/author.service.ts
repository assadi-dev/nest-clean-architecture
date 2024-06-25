import { Injectable } from '@nestjs/common';
import { CreateAuthorInput } from './dto/create-author.input';
import { UpdateAuthorInput } from './dto/update-author.input';
import { container } from 'tsyringe';
import Logger from 'src/domain/port/logger/logger.port';
import CreateAuthorUseCase from 'src/domain/usecases/author/create-author.usecase';
import ListAuthorUseCase from 'src/domain/usecases/author/list-author.usecase';
import FindAuthorUseCase from 'src/domain/usecases/author/find.usecase';

@Injectable()
export class AuthorService {
  private readonly logger: Logger;
  constructor() {
    this.logger = container.resolve<Logger>('Logger');
  }

  async create(createAuthorInput: CreateAuthorInput) {
    const newAuthor = new CreateAuthorUseCase();
    const result = await newAuthor.execute(createAuthorInput);
    this.logger.info('Author has been created !');
    return result;
  }

  async findAll() {
    const listAuthor = new ListAuthorUseCase();
    return await listAuthor.execute();
  }

  async findOne(id: number) {
    const findAuthor = new FindAuthorUseCase();

    return await findAuthor.execute(id);
  }

  update(id: number, updateAuthorInput: UpdateAuthorInput) {
    return `This action updates a #${id} author`;
  }

  remove(id: number) {
    return `This action removes a #${id} author`;
  }
}
