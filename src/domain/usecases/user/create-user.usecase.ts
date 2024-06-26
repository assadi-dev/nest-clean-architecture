import {
  CreateUserInputInterface,
  UserInterface,
  UserRepositoryInterface,
} from 'src/domain/interfaces/entity/user.interfaces';
import { container } from 'tsyringe';

export default class CreateUserUseCase {
  private userRepository: UserRepositoryInterface;
  constructor() {
    this.userRepository =
      container.resolve<UserRepositoryInterface>('UserRepository');
  }

  async execute(data: CreateUserInputInterface): Promise<UserInterface> {
    const userCreated = this.userRepository.create(data);
    return userCreated;
  }
}
