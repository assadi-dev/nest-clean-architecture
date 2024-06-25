import {
  UserInterface,
  UserRepositoryInterface,
} from 'src/domain/interfaces/entity/user.interfaces';
import { container } from 'tsyringe';
import { UserCreateInputDto, userDecode } from './dto/user.dto';

export default class CreateUserUseCase {
  private userRepository: UserRepositoryInterface;
  constructor() {
    this.userRepository =
      container.resolve<UserRepositoryInterface>('UserRepository');
  }

  public validateCreateInput(inputs: unknown): UserCreateInputDto {
    const validateUser = userDecode.decodeInput(inputs);
    if (validateUser.error) throw validateUser.error;
    return validateUser.data;
  }

  public async execute(data: UserCreateInputDto): Promise<UserInterface> {
    const validateInput = this.validateCreateInput(data);
    const userCreated = this.userRepository.create({
      email: validateInput.email,
      password: validateInput.password,
    });
    return userCreated;
  }
}
