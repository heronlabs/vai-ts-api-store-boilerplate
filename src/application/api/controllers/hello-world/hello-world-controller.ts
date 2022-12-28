import {Controller, Get, HttpCode, HttpStatus, Inject} from '@nestjs/common';

import {HelloWorldEntity} from '../../../../core/entities/hello-world-entity';
import {JsonPresenterDto} from '../../presenters/json/dtos/json-presenter-dto';
import {JsonPresenter} from '../../presenters/json/json-presenter';

@Controller('/hello-world')
export class HelloWorldController {
  @Get()
  @HttpCode(HttpStatus.OK)
  public async list(): Promise<JsonPresenterDto<HelloWorldEntity[]>> {
    const entites = await HelloWorldEntity.find();

    return this.jsonPresenter.envelope(entites);
  }

  constructor(
    @Inject(JsonPresenter) private readonly jsonPresenter: JsonPresenter
  ) {}
}
