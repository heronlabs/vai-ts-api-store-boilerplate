import {getConnection} from 'typeorm';

beforeEach(async () => {
  await getConnection().synchronize(true);
});
