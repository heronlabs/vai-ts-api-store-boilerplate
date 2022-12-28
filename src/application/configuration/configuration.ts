import {
  Environment,
  NumberEnvPresenter,
  TextEnvPresenter,
} from '@heronlabs/presenter-env';
import {Inject} from '@nestjs/common';

import {EnvironmentConfiguration} from './interfaces/environment-configuration';

export class Configuration implements EnvironmentConfiguration {
  public cors = {
    origin: this.textEnvPresenter.getValueByKey('CORS_ORIGIN'),
  };

  public database = {
    host: this.textEnvPresenter.getValueByKey('DATABASE_HOST'),
    port: this.numberEnvPresenter.getValueByKey('DATABASE_PORT'),
    username: this.textEnvPresenter.getValueByKey('DATABASE_USERNAME'),
    password: this.textEnvPresenter.getValueByKey('DATABASE_PASSWORD'),
    database: this.textEnvPresenter.getValueByKey('DATABASE_NAME'),
  };

  constructor(
    @Inject(TextEnvPresenter)
    private textEnvPresenter: Environment<string>,
    @Inject(NumberEnvPresenter)
    private numberEnvPresenter: Environment<number>
  ) {}
}
