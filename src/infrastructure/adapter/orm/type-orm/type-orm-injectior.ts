import { UserRepositoryInterface } from 'src/domain/interfaces/entity/user.interfaces';
import { container } from 'tsyringe';

import TypeOrmUserRepository from './repositories/user.repository';
import TypeOrmPostRepository from './repositories/post.repositories';

container
  .register<UserRepositoryInterface>('UserRepository', {
    useValue: new TypeOrmUserRepository(),
  })
  .register('PostRepository', {
    useValue: new TypeOrmPostRepository(),
  });
