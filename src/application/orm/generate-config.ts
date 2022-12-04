/* eslint-disable no-console */

require('dotenv').config({
  path: './tests/integration/__factories__/.env.integration',
});

import {NestFactory} from '@nestjs/core';
import * as fs from 'fs';
import {ConnectionOptions} from 'typeorm';

import {ConfigBootstrap} from '../configuration/config-bootstrap';
import {Configuration} from '../configuration/configuration';

const Orm = async (): Promise<ConnectionOptions> => {
  const app = await NestFactory.create(ConfigBootstrap);

  const configuration = app.get(Configuration);

  const ormFile: ConnectionOptions = {
    type: 'postgres',
    host: configuration.database.host,
    port: configuration.database.port,
    username: configuration.database.username,
    password: configuration.database.password,
    database: configuration.database.database,
    logging: false,
    entities: ['./src/core/**/*-entity.ts'],
    migrations: ['./src/application/orm/migration/*.ts'],
    cli: {
      migrationsDir: 'src/application/orm/migration',
    },
  };

  return ormFile;
};

Orm().then(ormFile => {
  fs.writeFile('./ormconfig.json', JSON.stringify(ormFile, null, 2), err => {
    if (err) throw err;
    console.log('The file has been saved!');
  });
});
