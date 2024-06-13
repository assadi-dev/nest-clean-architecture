import { UserRepositoryInterface } from 'src/domain/interfaces/entity/user.interfaces';
import { container } from 'tsyringe';

import TypeOrmRepository from './repositories/user.repository';

container.register<UserRepositoryInterface>('UserRepository', {
  useValue: new TypeOrmRepository(),
});
