import {Controller, Get, HttpCode, HttpStatus, Inject} from '@nestjs/common';

import {JsonPresenterDto} from '../../presenters/json/dtos/json-presenter-dto';
import {JsonPresenter} from '../../presenters/json/json-presenter';

@Controller('/')
export class HealthCheckController {
  @Get()
  @HttpCode(HttpStatus.OK)
  public status(): JsonPresenterDto<string> {
    return this.jsonPresenter.envelope('OK');
  }

  constructor(
    @Inject(JsonPresenter) private readonly jsonPresenter: JsonPresenter
  ) {}
}
