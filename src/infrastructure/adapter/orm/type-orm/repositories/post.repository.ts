import {
  CreatePostInputInterface,
  PostInterface,
  PostRepositoryInterface,
  updatePostInputInterface,
} from 'src/domain/interfaces/entity/post.interface';
import { Post } from 'src/infrastructure/frameworks/Nest/post/entities/post.entity';
import { Repository } from 'typeorm';
import { dataSource, isInitialized } from '../data-source.adapter';

export default class TypeOrmPostRepository implements PostRepositoryInterface {
  private async getPostRepository(): Promise<Repository<Post>> {
    await isInitialized();
    return dataSource.getRepository(Post);
  }

  async create(inputs: CreatePostInputInterface): Promise<PostInterface> {
    const postRepository = await this.getPostRepository();
    const result = await postRepository.save(inputs);
    return result;
  }
  async findOne(id: number): Promise<PostInterface | null> {
    const postRepository = await this.getPostRepository();
    const result = await postRepository.findOneBy({ id });
    if (result) return result;
    return null;
  }
  async findAll(): Promise<PostInterface[]> {
    const postRepository = await this.getPostRepository();
    return await postRepository.find({ relations: { author: true } });
  }
  async update(
    id: number,
    input: updatePostInputInterface,
  ): Promise<PostInterface | null> {
    const postRepository = await this.getPostRepository();
    await postRepository.update({ id }, input);
    return await this.findOne(id);
  }
  async delete(id: number): Promise<void> {
    const postRepository = await this.getPostRepository();
    await postRepository.softDelete({ id });
  }
}
