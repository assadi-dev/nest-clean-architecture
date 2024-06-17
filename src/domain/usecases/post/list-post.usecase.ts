import {
  PostInterface,
  PostRepositoryInterface,
} from 'src/domain/interfaces/entity/post.interface';
import { container } from 'tsyringe';

export default class ListPostUseCase {
  private postRepository: PostRepositoryInterface;
  constructor() {
    this.postRepository = container.resolve('PostRepository');
  }

  async execute(): Promise<PostInterface[]> {
    const listPost = await this.postRepository.findAll();
    return listPost;
  }
}
