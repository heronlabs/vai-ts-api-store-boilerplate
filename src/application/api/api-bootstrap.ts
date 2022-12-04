import {Module, ModuleMetadata, ValidationPipe} from '@nestjs/common';
import {APP_PIPE} from '@nestjs/core';

import {CoreBootstrap} from '../../core/core-bootstrap';
import {ConfigBootstrap} from '../configuration/config-bootstrap';
import {HealthCheckController} from './controllers/health-check/health-check-controller';
import {JsonPresenter} from './presenters/json/json-presenter';

export const apiModule: ModuleMetadata = {
  providers: [
    {
      provide: APP_PIPE,
      useFactory: () => new ValidationPipe({transform: true}),
    },
    JsonPresenter,
  ],
  imports: [ConfigBootstrap, CoreBootstrap],
  controllers: [HealthCheckController],
};

@Module(apiModule)
export class ApiBootstrap {}
