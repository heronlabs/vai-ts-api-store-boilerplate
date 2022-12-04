import {HttpStatus, INestApplication} from '@nestjs/common';
import {Test} from '@nestjs/testing';
import * as request from 'supertest';

import {apiModule} from '../../../../../src/application/api/api-bootstrap';

describe('Given controller for Health check', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule(apiModule).compile();
    app = moduleRef.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  describe('Given status route', () => {
    it('Should get OK', async () => {
      const response = await request(app.getHttpServer()).get('/').send();

      expect(response.statusCode).toEqual(HttpStatus.OK);
    });

    it('Should get OK', async () => {
      const response = await request(app.getHttpServer()).get('').send();

      expect(response.statusCode).toEqual(HttpStatus.OK);
    });
  });
});
