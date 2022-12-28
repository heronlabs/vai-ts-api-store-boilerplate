import {Mock} from 'moq.ts';

import {HelloWorldController} from '../../../../../src/application/api/controllers/hello-world/hello-world-controller';
import {HelloWorldEntity} from '../../../../../src/core/entities/hello-world-entity';
import {JsonPresenterMock} from '../../../__mocks__/presenters/json-presenter-mock';

describe('Given controller for hello world', () => {
  let controller: HelloWorldController;

  beforeEach(async () => {
    controller = new HelloWorldController(JsonPresenterMock);
  });

  describe('Given list route', () => {
    it('Should get entites', async () => {
      const helloWorld = new Mock<HelloWorldEntity>().object();
      jest.spyOn(HelloWorldEntity, 'find').mockResolvedValueOnce([helloWorld]);

      JsonPresenterMock.envelope.mockImplementation(payload => ({payload}));

      const response = await controller.list();

      expect(response.payload).toEqual([helloWorld]);
    });
  });
});
