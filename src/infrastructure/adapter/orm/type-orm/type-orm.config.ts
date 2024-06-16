import { mysqlConfig } from '../../../../../config/database.config';
import { DataSourceOptions } from 'typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

export const mysqlOption: DataSourceOptions = {
  type: 'mysql',
  host: mysqlConfig.host,
  port: mysqlConfig.port,
  username: mysqlConfig.username,
  password: mysqlConfig.password,
  database: mysqlConfig.database,
  namingStrategy: new SnakeNamingStrategy(),
  extra: {
    charset: 'utf8mb4_unicode_ci',
  },
};
