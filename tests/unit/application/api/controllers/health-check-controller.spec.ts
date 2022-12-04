import {HealthCheckController} from '../../../../../src/application/api/controllers/health-check/health-check-controller';
import {JsonPresenterMock} from '../../../__mocks__/presenters/json-presenter-mock';

describe('Given controller for health check', () => {
  let controller: HealthCheckController;

  beforeEach(async () => {
    controller = new HealthCheckController(JsonPresenterMock);
  });

  describe('Given status route', () => {
    it('Should get OK', () => {
      JsonPresenterMock.envelope.mockImplementation(payload => ({payload}));

      const response = controller.status();

      expect(response.payload).toBeTruthy();
    });
  });
});
