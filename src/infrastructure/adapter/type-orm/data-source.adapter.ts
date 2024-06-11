import { DataSource } from 'typeorm';
import { mysqlOption } from './type-orm.config';
import { join } from 'path';
import { User } from 'src/infrastructure/frameworks/Nest/user/entities/user.entity';

export const dataSource = new DataSource({
  ...mysqlOption,
  entities: [User],
  migrations: [join('src/infrastructure/adapter/type-orm/migrations/**/*.ts')],
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
