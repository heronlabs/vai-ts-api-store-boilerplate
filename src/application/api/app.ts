import {INestApplication} from '@nestjs/common';
import {NestFactory} from '@nestjs/core';

import {Configuration} from '../configuration/configuration';
import {ApiBootstrap} from './api-bootstrap';

export const App = async (): Promise<INestApplication> => {
  const app = await NestFactory.create(ApiBootstrap);

  const configuration = app.get(Configuration);

  const origin = configuration.cors.origin.split(',');

  app.enableCors({
    origin: origin[0] === '*' ? true : origin,
  });

  return app;
};
