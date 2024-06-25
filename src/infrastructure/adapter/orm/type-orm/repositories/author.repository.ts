import { Repository } from 'typeorm';
import {
  AuthorInterface,
  AuthorRepositoryInterface,
  CreateAuthorInputInterface,
  updateAuthorInputInterface,
} from '../../../../../domain/interfaces/entity/author.interface';
import { dataSource, isInitialized } from '../data-source.adapter';
import { Author } from 'src/infrastructure/frameworks/Nest/author/entities/author.entity';

export default class TypeOrmAuthorRepository
  implements AuthorRepositoryInterface
{
  private async getAuthorRepository(): Promise<Repository<Author>> {
    await isInitialized();
    return dataSource.getRepository(Author);
  }

  async create(inputs: CreateAuthorInputInterface): Promise<AuthorInterface> {
    const authorRepository = await this.getAuthorRepository();
    const author = await authorRepository.save(inputs);
    return author;
  }
  async findOne(id: number): Promise<AuthorInterface | null> {
    const authorRepository = await this.getAuthorRepository();
    const author = await authorRepository.findOne({
      where: { id },
      relations: {
        user: true,
        posts: true,
      },
    });
    if (author) return author;
    return null;
  }
  async findAll(): Promise<AuthorInterface[]> {
    const authorRepository = await this.getAuthorRepository();
    return await authorRepository.find({
      relations: {
        user: true,
        posts: true,
      },
    });
  }
  async update(
    id: number,
    input: updateAuthorInputInterface,
  ): Promise<AuthorInterface> {
    const authorRepository = await this.getAuthorRepository();
    await authorRepository.update(id, input);
    return this.findOne(id);
  }
  async delete(id: number): Promise<void> {
    const authorRepository = await this.getAuthorRepository();
    await authorRepository.softDelete({ id });
  }
}
