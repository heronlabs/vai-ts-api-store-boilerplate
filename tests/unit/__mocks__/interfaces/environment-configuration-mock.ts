import {faker} from '@faker-js/faker';

export const EnvironmentConfigurationMock = {
  getConfig: jest.fn().mockResolvedValueOnce({
    cors: {
      origin: `${faker.internet.url()},${faker.internet.url()}`,
    },
    database: {
      host: faker.internet.url(),
      port: 0,
      username: faker.datatype.string(),
      password: faker.datatype.string(),
      database: faker.datatype.string(),
    },
  }),
};
