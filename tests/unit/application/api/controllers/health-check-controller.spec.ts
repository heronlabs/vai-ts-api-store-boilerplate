import {HealthCheckController} from '../../../../../src/application/api/controllers/health-check/health-check-controller';
import {EnvironmentConfigurationMock} from '../../../__mocks__/interfaces/environment-configuration-mock';
import {JsonPresenterMock} from '../../../__mocks__/presenters/json-presenter-mock';

describe('Given controller for health check', () => {
  let controller: HealthCheckController;

  beforeEach(async () => {
    controller = new HealthCheckController(
      EnvironmentConfigurationMock,
      JsonPresenterMock
    );
  });

  describe('Given status route', () => {
    it('Should get OK', async () => {
      JsonPresenterMock.envelope.mockImplementation(payload => ({payload}));

      const response = await controller.status();

      expect(response.payload).toBeTruthy();
    });
  });
});
