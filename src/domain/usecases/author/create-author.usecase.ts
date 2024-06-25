import {
  AuthorInterface,
  AuthorRepositoryInterface,
} from 'src/domain/interfaces/entity/author.interface';
import {
  UserInterface,
  UserRepositoryInterface,
} from 'src/domain/interfaces/entity/user.interfaces';
import { container } from 'tsyringe';
import { AuthorCreateInputDto, authorDecode } from './dto/author.dto';

export default class CreateAuthorUseCase {
  private readonly userRepository: UserRepositoryInterface;
  private readonly authorRepository: AuthorRepositoryInterface;

  constructor() {
    this.userRepository = container.resolve('UserRepository');
    this.authorRepository = container.resolve('AuthorRepository');
  }

  public validateCreateInput(
    input: AuthorCreateInputDto,
  ): AuthorCreateInputDto {
    const validateAuthorInput = authorDecode.decodeInput(input);
    if (validateAuthorInput.error) throw validateAuthorInput.error;
    return validateAuthorInput.data;
  }

  public validateUserId(id: number) {
    const validateUserId = authorDecode.decodeId(id);
    if (validateUserId.error) throw validateUserId.error;
    return validateUserId.data;
  }

  public findUser = async (id: number): Promise<UserInterface | null> => {
    const validateUserId = this.validateUserId(id);
    const user = await this.userRepository.findOne(validateUserId);
    if (user) return user;
    return null;
  };

  public async execute(input: AuthorCreateInputDto): Promise<AuthorInterface> {
    const validateInput = this.validateCreateInput(input);
    const user = await this.findUser(validateInput.userId);
    const author = await this.authorRepository.create({
      ...validateInput,
      user,
    });
    return author;
  }
}
