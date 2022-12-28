import {faker} from '@faker-js/faker';
import {Test, TestingModule} from '@nestjs/testing';
import {getConnection} from 'typeorm';

import {apiModule} from '../../../../../src/application/api/api-bootstrap';
import {HelloWorldController} from '../../../../../src/application/api/controllers/hello-world/hello-world-controller';
import {HelloWorldEntity} from '../../../../../src/core/entities/hello-world-entity';

describe('Given controller for hello world', () => {
  let connection;
  let moduleRef: TestingModule;
  let controller: HelloWorldController;

  beforeAll(async () => {
    connection = getConnection('test:integration').createEntityManager();
    moduleRef = await Test.createTestingModule(apiModule).compile();
  });

  beforeEach(async () => {
    controller = moduleRef.get(HelloWorldController);
  });

  afterAll(async () => {
    moduleRef.close();
  });

  describe('Given get route', () => {
    it('Should list entites', async () => {
      const helloWorld = new HelloWorldEntity();
      helloWorld.name = faker.datatype.string();
      await connection.save(helloWorld);

      const response = await controller.list();

      expect(response.payload).toEqual([helloWorld]);
    });
  });
});
