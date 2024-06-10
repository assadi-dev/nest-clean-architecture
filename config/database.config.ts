import 'dotenv/config';
import { z } from 'zod';
import { env } from 'node:process';

const mysqlSchema = z.object({
  host: z.string().min(1),
  port: z.coerce.number().min(1),
  username: z.string().min(1),
  password: z.string().min(1),
  database: z.string().min(1),
});

export const mysqlConfig = mysqlSchema.parse({
  host: env.MYSQL_HOST,
  port: env.MYSQL_PORT,
  username: env.MYSQL_USERNAME,
  password: env.MYSQL_PASSWORD,
  database: env.MYSQL_DBNAME,
});
