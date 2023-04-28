import {
  Environment,
  NumberEnvPresenter,
  TextEnvPresenter,
} from '@heronlabs/presenter-env';
import {Inject} from '@nestjs/common';

import {
  Config,
  EnvironmentConfiguration,
} from './interfaces/environment-configuration';

export class Configuration implements EnvironmentConfiguration {
  async getConfig(): Promise<Config> {
    return {
      cors: {
        origin: await this.textEnvPresenter.getValueByKey('CORS_ORIGIN'),
      },
      database: {
        host: await this.textEnvPresenter.getValueByKey('DATABASE_HOST'),
        port: await this.numberEnvPresenter.getValueByKey('DATABASE_PORT'),
        username: await this.textEnvPresenter.getValueByKey(
          'DATABASE_USERNAME'
        ),
        password: await this.textEnvPresenter.getValueByKey(
          'DATABASE_PASSWORD'
        ),
        database: await this.textEnvPresenter.getValueByKey('DATABASE_NAME'),
      },
    };
  }

  constructor(
    @Inject(TextEnvPresenter)
    private textEnvPresenter: Environment<string>,
    @Inject(NumberEnvPresenter)
    private numberEnvPresenter: Environment<number>
  ) {}
}
