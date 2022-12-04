import {faker} from '@faker-js/faker';

import {JsonPresenter} from '../../../../../src/application/api/presenters/json/json-presenter';

describe('Given json presenter', () => {
  let presenter: JsonPresenter;

  beforeEach(() => {
    presenter = new JsonPresenter();
  });

  describe('Given an object with type', () => {
    it('Should return envelope payload', () => {
      const payload = faker.datatype.string();

      const result = presenter.envelope(payload);

      expect(result).toEqual({
        payload,
      });
    });
  });
});
