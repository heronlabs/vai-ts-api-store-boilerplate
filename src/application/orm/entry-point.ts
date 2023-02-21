import 'reflect-metadata';

import {Handler} from 'aws-lambda';
import {createConnection} from 'typeorm';

export const handler: Handler = async (): Promise<void> => {
  const connection = await createConnection({
    name: 'orm',
    type: 'postgres',
    host: process.env['DATABASE_HOST'],
    port: Number(process.env['DATABASE_PORT']),
    username: process.env['DATABASE_USERNAME'],
    password: process.env['DATABASE_PASSWORD'],
    database: process.env['DATABASE_NAME'],
    logging: true,
    entities: ['./bin/core/**/*-entity.js'],
    migrations: ['./bin/application/orm/migration/*.js'],
  });

  await connection.synchronize(true);

  await connection.close();
};
