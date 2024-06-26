import { DataSource } from 'typeorm';
import { mysqlOption } from './type-orm.config';
import { User } from '../../../frameworks/Nest/user/entities/user.entity';
import { join } from 'path';
import { Post } from '../../../frameworks/Nest/post/entities/post.entity';

export const dataSource = new DataSource({
  ...mysqlOption,
  entities: [User, Post],
  migrations: [join(__dirname, './migrations/*{.ts,.js}')],
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
