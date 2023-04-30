import 'reflect-metadata';

import {INestApplication} from '@nestjs/common';

import {App} from './app';

App().then((app: INestApplication) => {
  return app.listen(3000);
});
