import {Module, ModuleMetadata} from '@nestjs/common';

import {DatabaseBootstrap} from '../infrastructure/database/database-bootstrap';

export const coreModule: ModuleMetadata = {
  providers: [],
  imports: [DatabaseBootstrap],
};

@Module(coreModule)
export class CoreBootstrap {}
