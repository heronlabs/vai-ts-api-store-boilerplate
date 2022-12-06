import {EnvBootstrap} from '@heronlabs/presenter-env';
import {Module} from '@nestjs/common';

import {Configuration} from './configuration';

export const configModule = {
  providers: [Configuration],
  exports: [Configuration],
  imports: [EnvBootstrap],
};

@Module(configModule)
export class ConfigBootstrap {}
