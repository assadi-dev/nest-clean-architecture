import { UserRepositoryInterface } from 'src/domain/interfaces/entity/user.interfaces';
import { User } from 'src/infrastructure/frameworks/Nest/user/entities/user.entity';
import UserRepository from 'src/infrastructure/frameworks/Nest/user/entities/user.repository';
import { container } from 'tsyringe';
import { Repository } from 'typeorm';
import TypeOrmRepository from './repositories/user.repository';
import { dataSource } from './data-source.adapter';

container.register<UserRepositoryInterface>('UserRepository', {
  useValue: new TypeOrmRepository(),
});
