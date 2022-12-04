import {Test} from '@nestjs/testing';

import {apiModule} from '../../../../../src/application/api/api-bootstrap';
import {HealthCheckController} from '../../../../../src/application/api/controllers/health-check/health-check-controller';

describe('Given controller for health check', () => {
  let controller: HealthCheckController;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule(apiModule).compile();
    controller = moduleRef.get(HealthCheckController);
  });

  describe('Given status route', () => {
    it('Should get OK', () => {
      const response = controller.status();

      expect(response.payload).toBeTruthy();
    });
  });
});
