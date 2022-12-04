import 'reflect-metadata';

import {INestApplication} from '@nestjs/common';

import {App} from './app';

('use strict');

App().then((app: INestApplication) => {
  return app.listen(3000);
});
