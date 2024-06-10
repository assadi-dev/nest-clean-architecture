import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import {
  CreateUserInputInterface,
  UserInterface,
  UserRepositoryInterface,
} from 'src/domain/interfaces/entity/user.interfaces';
import { UserId } from 'src/domain/provider/identifier/userIdentifier.provider';
import { container } from 'tsyringe';
import Logger from 'src/domain/port/logger/logger.port';

@Injectable()
export class UserService implements UserRepositoryInterface {
  private logger: Logger;
  constructor() {
    this.logger = container.resolve<Logger>('Logger');
  }

  async create(createUserInput: CreateUserInput): Promise<UserInterface> {
    this.logger.info('[Pulse] create user start');
    console.log('create');

    return {
      id: 123,
      email: createUserInput.email,
      password: createUserInput.password,
    };
  }

  async findAll() {
    return [];
  }

  async findOne(id: UserId): Promise<UserInterface> {
    return {
      id: 123,
      email: 'test@12.com',
      password: '123456',
    };
  }

  async update(id: UserId, updateUserInput: UpdateUserInput) {
    return {
      id: 123,
      email: 'test@12.com',
      password: '123456',
    };
  }

  async remove(id: UserId) {
    return `This action removes a #${id} user`;
  }
}
