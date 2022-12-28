import {createConnection, getConnection} from 'typeorm';

beforeAll(async () => {
  await createConnection({
    name: 'test:integration',
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
  });
});

beforeEach(async () => {
  await getConnection('test:integration').synchronize(true);
});

afterAll(async () => {
  await getConnection('test:integration').close();
});
