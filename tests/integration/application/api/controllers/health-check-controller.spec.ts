import {Test, TestingModule} from '@nestjs/testing';

import {apiModule} from '../../../../../src/application/api/api-bootstrap';
import {HealthCheckController} from '../../../../../src/application/api/controllers/health-check/health-check-controller';

describe('Given controller for health check', () => {
  let moduleRef: TestingModule;
  let controller: HealthCheckController;

  beforeAll(async () => {
    moduleRef = await Test.createTestingModule(apiModule).compile();
  });

  beforeEach(async () => {
    controller = moduleRef.get(HealthCheckController);
  });

  afterAll(async () => {
    moduleRef.close();
  });

  describe('Given status route', () => {
    it('Should get OK', async () => {
      const response = await controller.status();

      expect(response.payload).toBeTruthy();
    });
  });
});
