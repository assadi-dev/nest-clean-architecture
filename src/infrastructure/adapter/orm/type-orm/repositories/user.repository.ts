import {
  CreateUserInputInterface,
  UserInterface,
  UserRepositoryInterface,
} from 'src/domain/interfaces/entity/user.interfaces';

import { dataSource, isInitialized } from '../data-source.adapter';
import 'reflect-metadata';
import { User } from 'src/infrastructure/frameworks/Nest/user/entities/user.entity';

export default class TypeOrmUserRepository implements UserRepositoryInterface {
  async create(inputs: CreateUserInputInterface): Promise<UserInterface> {
    await isInitialized();
    const userRepository = await dataSource.getRepository(User);
    const user = await userRepository.save({
      email: inputs.email,
      password: inputs.password,
    });
    // const user = await userRepository.save(result);

    if (!user) {
      throw "L' utilisateur n'a pas pu etre enregistré";
    }

    return user;
  }
  async findOne(userId: number): Promise<UserInterface> {
    await isInitialized();
    const userRepository = dataSource.getRepository(User);
    const result = await userRepository.findOne({
      where: {
        id: userId,
      },
    });
    return result ?? null;
  }
  async findAll(): Promise<UserInterface[]> {
    await isInitialized();
    const userRepository = dataSource.getRepository(User);
    const result = await userRepository.find();
    return result;
  }
}
