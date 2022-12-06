import {createConnection, getConnection} from 'typeorm';

import {connectionOptions} from '../../src/application/orm/connection-options';

beforeAll(async () => {
  await createConnection(connectionOptions('orm'));
});

beforeEach(async () => {
  await getConnection('orm').synchronize(true);
});

afterAll(async () => {
  await getConnection('orm').close();
});
