import 'reflect-metadata';

import {Handler} from 'aws-lambda';
import {createConnection} from 'typeorm';

export const orm = async () => {
  try {
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

    await connection.runMigrations({transaction: 'each'});

    await connection.close();
  } catch (error) {
    console.error(error);
  }

  console.log('OK');
};

export const handler: Handler = async (): Promise<void> => {
  await orm();
};
