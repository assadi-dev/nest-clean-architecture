import { z } from 'zod';
import { env } from 'node:process';

const mysqlSchema = z.object({
  host: z.string().min(1),
  port: z.coerce.number().min(1),
  username: z.string().min(1),
  password: z.string().min(1),
  database: z.string().min(1),
});
console.log(env.MYSQL_HOST);

export const mysqlConfig = mysqlSchema.parse({
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'mysql',
  database: 'nest-clean-archi-boilerplate',
});
