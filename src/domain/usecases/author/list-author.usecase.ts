import { AuthorRepositoryInterface } from 'src/domain/interfaces/entity/author.interface';
import { container } from 'tsyringe';

export default class ListAuthorUseCase {
  private readonly authorRepository: AuthorRepositoryInterface;

  constructor() {
    this.authorRepository = container.resolve('AuthorRepository');
  }

  public async execute() {
    return await this.authorRepository.findAll();
  }
}
