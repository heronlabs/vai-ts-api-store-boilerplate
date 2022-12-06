import {ConnectionOptions} from 'typeorm';

export const connectionOptions = (name?: string): ConnectionOptions => {
  const ormFile: ConnectionOptions = {
    name,
    type: 'postgres',
    host: process.env['DATABASE_HOST'],
    port: Number(process.env['DATABASE_PORT']),
    username: process.env['DATABASE_USERNAME'],
    password: process.env['DATABASE_PASSWORD'],
    database: process.env['DATABASE_DATABASE'],
    logging: false,
    entities: ['./src/core/**/*-entity.ts'],
    migrations: ['./src/application/orm/migration/*.ts'],
    cli: {
      migrationsDir: 'src/application/orm/migration',
    },
  };

  return ormFile;
};
