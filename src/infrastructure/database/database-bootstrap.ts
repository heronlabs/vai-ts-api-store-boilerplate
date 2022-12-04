import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';

import {ConfigBootstrap} from '../../application/configuration/config-bootstrap';
import {Configuration} from '../../application/configuration/configuration';
import {ConnectionFactory} from './factories/connection-factory';

export const databaseModule = {
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigBootstrap],
      inject: [Configuration],
      useFactory: ConnectionFactory.make,
    }),
  ],
  exports: [TypeOrmModule],
};

@Module(databaseModule)
export class DatabaseBootstrap {}
