import 'reflect-metadata';

import serverlessExpress from '@vendia/serverless-express';
import {Callback, Context, Handler} from 'aws-lambda';

import {App} from './application/api/app';

let server: Handler;

const bootstrap = async () => {
  const app = await App();

  await app.init();

  return serverlessExpress({
    app: app.getHttpAdapter().getInstance(),
  });
};

export const handler: Handler = async (
  event: unknown,
  context: Context,
  callback: Callback
) => {
  server = server ?? (await bootstrap());
  return server(event, context, callback);
};
