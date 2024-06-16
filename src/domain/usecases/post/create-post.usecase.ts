import {
  CreatePostInputInterface,
  PostInterface,
  PostRepositoryInterface,
} from 'src/domain/interfaces/entity/post.interface';
import { UserRepositoryInterface } from 'src/domain/interfaces/entity/user.interfaces';
import { User } from 'src/infrastructure/frameworks/Nest/user/entities/user.entity';
import { container } from 'tsyringe';
import { z } from 'zod';

export default class CreatePostUseCase {
  private postRepository: PostRepositoryInterface;
  private userRepository: UserRepositoryInterface;
  constructor() {
    this.postRepository = container.resolve('PostRepository');
    this.userRepository = container.resolve('UserRepository');
  }

  public validateCreateInput(input: CreatePostInputInterface) {
    const postInput = z.object({
      title: z.string().min(1),
      content: z.string().min(1),
      authorId: z.number().min(1),
    });
    const postInputValidate = postInput.safeParse(input);
    if (postInputValidate.error) throw postInputValidate.error;
    return postInputValidate.data;
  }

  public async findAuthor(id: number): Promise<User | null> {
    const author = await this.userRepository.findOne(id);
    if (!author) return null;
    return author;
  }

  public async execute(
    input: CreatePostInputInterface,
  ): Promise<PostInterface> {
    const validatedInput = this.validateCreateInput(input);

    const author = await this.findAuthor(validatedInput.authorId);
    const newPost = await this.postRepository.create({
      title: validatedInput.title,
      content: validatedInput.content,
      author,
    });
    return newPost;
  }
}
