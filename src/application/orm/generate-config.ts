/* eslint-disable no-console */

require('dotenv').config({
  path: './tests/integration/__factories__/.env.integration',
});

import * as fs from 'fs';

import {connectionOptions} from './connection-options';

fs.writeFile(
  './ormconfig.json',
  JSON.stringify(connectionOptions(), null, 2),
  err => {
    if (err) throw err;
    console.log('The file has been saved!');
  }
);
