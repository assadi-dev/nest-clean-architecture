import { AuthorRepositoryInterface } from 'src/domain/interfaces/entity/author.interface';
import { container } from 'tsyringe';
import { authorDecode } from './dto/author.dto';

export default class FindAuthorUseCase {
  private readonly authorRepository: AuthorRepositoryInterface;

  constructor() {
    this.authorRepository = container.resolve('AuthorRepository');
  }

  public async execute(id: number) {
    const validateId = authorDecode.decodeId(id);
    if (validateId.error) throw validateId.error;
    return await this.authorRepository.findOne(validateId.data);
  }
}
