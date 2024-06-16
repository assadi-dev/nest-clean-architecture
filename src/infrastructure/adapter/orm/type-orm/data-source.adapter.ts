import { DataSource } from 'typeorm';
import { mysqlOption } from './type-orm.config';
import { User } from '../../../frameworks/Nest/user/entities/user.entity';

import { join } from 'path';

export const dataSource = new DataSource({
  ...mysqlOption,
  entities: [User],
  migrations: [
    join(
      process.cwd(),
      'src/infrastructure/adapter/orm/type-orm/migrations/*.ts',
    ),
  ],
});

/**
 * Initialisation de la base de donnée
 * @returns {boolean}
 */
export const isInitialized = (): Promise<boolean> => {
  if (dataSource.isInitialized) return Promise.resolve(true);
  return dataSource
    .initialize()
    .then(() => Promise.resolve(true))
    .catch(() => Promise.resolve(false));
};
