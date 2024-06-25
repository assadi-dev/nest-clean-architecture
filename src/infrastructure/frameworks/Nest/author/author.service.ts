import { Injectable } from '@nestjs/common';
import { CreateAuthorInput } from './dto/create-author.input';
import { UpdateAuthorInput } from './dto/update-author.input';
import { container } from 'tsyringe';
import Logger from 'src/domain/port/logger/logger.port';
import CreateAuthorUseCase from 'src/domain/usecases/author/create-author.usecase';

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

  findAll() {
    return `This action returns all author`;
  }

  findOne(id: number) {
    return `This action returns a #${id} author`;
  }

  update(id: number, updateAuthorInput: UpdateAuthorInput) {
    return `This action updates a #${id} author`;
  }

  remove(id: number) {
    return `This action removes a #${id} author`;
  }
}
