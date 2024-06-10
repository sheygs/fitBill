import 'dotenv/config';
import { DataSourceOptions } from 'typeorm';

export const dataSource: DataSourceOptions = {
  type: 'postgres',
  host: process.env.POSTGRES_HOST,
  port: +process.env.POSTGRES_PORT,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DATABASE,
  entities: [],
  //   entities: [__dirname + '/**/*.entity{.ts,.js}'],
  synchronize: process.env.NODE_ENV !== 'production',
  // migrations: ['migrations/**/*{.ts,.js}'],
  migrations: [],
  logging: process.env.NODE_ENV !== 'production',
};
