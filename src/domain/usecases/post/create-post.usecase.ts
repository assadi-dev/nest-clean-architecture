import {
  CreatePostInputInterface,
  PostInterface,
  PostRepositoryInterface,
} from 'src/domain/interfaces/entity/post.interface';
import { container } from 'tsyringe';
import { PostCreateInputDto, postDecode } from './dto/post.dto';
import {
  AuthorInterface,
  AuthorRepositoryInterface,
} from 'src/domain/interfaces/entity/author.interface';

export default class CreatePostUseCase {
  private readonly postRepository: PostRepositoryInterface;
  private readonly authorRepository: AuthorRepositoryInterface;
  constructor() {
    this.postRepository = container.resolve('PostRepository');
    this.authorRepository = container.resolve('AuthorRepository');
  }

  public validateCreateInput(input: PostCreateInputDto) {
    const postInputValidate = postDecode.decodeInput(input);
    if (postInputValidate.error) throw postInputValidate.error;
    return postInputValidate.data;
  }

  public validateUserId(arg: number) {
    const userIdValidate = postDecode.decodeId(arg);
    if (userIdValidate.error) throw userIdValidate.error;
    return userIdValidate.data;
  }

  public async findAuthor(id: number): Promise<AuthorInterface | null> {
    const userId = this.validateUserId(id);
    const author = await this.authorRepository.findOne(userId);
    if (!author) return null;
    return author;
  }

  public async execute(
    input: CreatePostInputInterface,
  ): Promise<PostInterface> {
    const validatedInput = this.validateCreateInput(input);
    const author = await this.findAuthor(validatedInput.authorId);
    if (!author) throw 'author no found !';
    const newPost = await this.postRepository.create({
      title: validatedInput.title,
      content: validatedInput.content,
      author,
    });
    return newPost;
  }
}
