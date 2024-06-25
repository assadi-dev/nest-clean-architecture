import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { UserInterface } from 'src/domain/interfaces/entity/user.interfaces';
import { container } from 'tsyringe';
import Logger from 'src/domain/port/logger/logger.port';
import CreateUserUseCase from 'src/domain/usecases/user/create-user.usecase';
import ListUserUseCase from 'src/domain/usecases/user/list-user.usecase';

@Injectable()
export class UserService {
  private logger: Logger;
  constructor() {
    this.logger = container.resolve<Logger>('Logger');
  }

  async create(createUserInput: CreateUserInput): Promise<UserInterface> {
    this.logger.info('[Pulse] create user start');
    const createUser = new CreateUserUseCase();
    const user = await createUser.execute(createUserInput);
    return user;
  }

  async findAll() {
    this.logger.info('[Pulse] get All user start');
    const listUser = new ListUserUseCase();
    const user = await listUser.execute();
    return user;
  }

  async findOne(id: number): Promise<UserInterface> {
    return {
      id: 123,
      email: 'test@12.com',
      password: '123456',
      createdAt: new Date(),
      updatedAt: new Date(),
    };
  }

  async update(id: number, updateUserInput: UpdateUserInput) {
    return {
      id: 123,
      email: 'test@12.com',
      password: '123456',
      createdAt: new Date(),
      updatedAt: new Date(),
    };
  }

  async remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
