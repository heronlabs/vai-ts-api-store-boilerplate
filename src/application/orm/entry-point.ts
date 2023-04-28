import 'reflect-metadata';

import {EnvironmentFactory} from '@heronlabs/presenter-env';
import {Handler} from 'aws-lambda';
import {createConnection} from 'typeorm';

export const orm = async () => {
  const env = await EnvironmentFactory.make();

  const envText = env.makeText();
  const envNumber = env.makeNumber();

  try {
    const connection = await createConnection({
      name: 'orm',
      type: 'postgres',
      host: await envText.getValueByKey('DATABASE_HOST'),
      port: await envNumber.getValueByKey('DATABASE_PORT'),
      username: await envText.getValueByKey('DATABASE_USERNAME'),
      password: await envText.getValueByKey('DATABASE_PASSWORD'),
      database: await envText.getValueByKey('DATABASE_NAME'),
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
