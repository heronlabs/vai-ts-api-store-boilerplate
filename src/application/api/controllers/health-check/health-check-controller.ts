import {Controller, Get, HttpCode, HttpStatus, Inject} from '@nestjs/common';

import {Configuration} from '../../../configuration/configuration';
import {EnvironmentConfiguration} from '../../../configuration/interfaces/environment-configuration';
import {JsonPresenterDto} from '../../presenters/json/dtos/json-presenter-dto';
import {JsonPresenter} from '../../presenters/json/json-presenter';

@Controller('/')
export class HealthCheckController {
  @Get()
  @HttpCode(HttpStatus.OK)
  public async status(): Promise<
    JsonPresenterDto<{
      status: string;
      corsOrigin: string;
    }>
  > {
    const {cors} = await this.environmentConfiguration.getConfig();

    return this.jsonPresenter.envelope({status: 'OK', corsOrigin: cors.origin});
  }

  constructor(
    @Inject(Configuration)
    private readonly environmentConfiguration: EnvironmentConfiguration,
    @Inject(JsonPresenter) private readonly jsonPresenter: JsonPresenter
  ) {}
}
