import { DataSource } from 'typeorm';
import { mysqlOption } from './type-orm.config';
import { join } from 'path';

const dataSource = new DataSource({
  ...mysqlOption,
  entities: [
    join(process.cwd(), 'src/infrastructure/frameworks/Nest/**/*.entity.ts'),
  ],
  migrations: [join('src/infrastructure/adapter/type-orm/migrations/**/*.ts')],
});

export default dataSource;
