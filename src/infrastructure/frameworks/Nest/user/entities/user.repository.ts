import {
  CreateUserInputInterface,
  UserInterface,
  UserRepositoryInterface,
} from 'src/domain/interfaces/entity/user.interfaces';
import { UserId } from 'src/domain/provider/identifier/userIdentifier.provider';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export default class UserRepository implements UserRepositoryInterface {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async create(inputs: CreateUserInputInterface): Promise<UserInterface> {
    const result = await this.userRepository.save(inputs);

    return result;
  }
  async findOne(userId: UserId): Promise<UserInterface> {
    const result = await this.userRepository.findOne({
      where: {
        id: userId,
      },
    });
    return result ?? null;
  }
  async findAll(): Promise<UserInterface[]> {
    return await this.userRepository.find();
  }
}
