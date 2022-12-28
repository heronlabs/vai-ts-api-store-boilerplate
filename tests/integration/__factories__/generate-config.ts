require('dotenv').config({
  path: './tests/integration/__factories__/.env.integration',
});

import * as fs from 'fs';

const connectionOptions = JSON.stringify(
  {
    name: 'local',
    type: 'postgres',
    host: process.env['DATABASE_HOST'],
    port: Number(process.env['DATABASE_PORT']),
    username: process.env['DATABASE_USERNAME'],
    password: process.env['DATABASE_PASSWORD'],
    database: process.env['DATABASE_NAME'],
    logging: false,
    entities: ['./src/core/**/*-entity.ts'],
    migrations: ['./src/application/orm/migration/*.ts'],
    cli: {
      migrationsDir: 'src/application/orm/migration',
    },
  },
  null,
  2
);

fs.writeFile('./ormconfig.json', connectionOptions, err => {
  if (err) throw err;
  console.log('The file has been saved!');
});
