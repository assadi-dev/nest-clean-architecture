import {
  UserInterface,
  UserRepositoryInterface,
} from 'src/domain/interfaces/entity/user.interfaces';
import { container } from 'tsyringe';

export default class ListUserUseCase {
  private userRepository: UserRepositoryInterface;
  constructor() {
    this.userRepository =
      container.resolve<UserRepositoryInterface>('UserRepository');
  }

  async execute(): Promise<UserInterface[]> {
    const userCreated = await this.userRepository.findAll();
    return userCreated;
  }
}
