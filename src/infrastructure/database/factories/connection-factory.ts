import {TypeOrmModuleOptions} from '@nestjs/typeorm';

import {EnvironmentConfiguration} from '../../../application/configuration/interfaces/environment-configuration';
import {HelloWorldEntity} from '../../../core/entities/hello-world-entity';

export class ConnectionFactory {
  public static make(
    environmentConfiguration: EnvironmentConfiguration
  ): TypeOrmModuleOptions {
    return {
      type: 'postgres',
      host: environmentConfiguration.database.host,
      port: environmentConfiguration.database.port,
      username: environmentConfiguration.database.username,
      password: environmentConfiguration.database.password,
      database: environmentConfiguration.database.database,
      entities: [HelloWorldEntity],
    };
  }
}
