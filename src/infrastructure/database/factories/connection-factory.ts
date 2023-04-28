import {TypeOrmModuleOptions} from '@nestjs/typeorm';

import {EnvironmentConfiguration} from '../../../application/configuration/interfaces/environment-configuration';
import {HelloWorldEntity} from '../../../core/entities/hello-world-entity';

export class ConnectionFactory {
  public static async make(
    environmentConfiguration: EnvironmentConfiguration
  ): Promise<TypeOrmModuleOptions> {
    const {database} = await environmentConfiguration.getConfig();

    return {
      type: 'postgres',
      host: database.host,
      port: database.port,
      username: database.username,
      password: database.password,
      database: database.database,
      entities: [HelloWorldEntity],
    };
  }
}
