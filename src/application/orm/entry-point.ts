import 'reflect-metadata';

import {Handler} from 'aws-lambda';

import {orm} from './orm';

export const handler: Handler = async (): Promise<void> => {
  await orm();
};
