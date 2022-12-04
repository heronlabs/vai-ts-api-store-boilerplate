import {JsonPresenterDto} from './dtos/json-presenter-dto';

export class JsonPresenter {
  envelope<T>(payload: T): JsonPresenterDto<T> {
    return {
      payload,
    };
  }
}
