import {Column, Entity} from 'typeorm';

import {BaseEntity} from './base-entity';

@Entity()
export class HelloWorldEntity extends BaseEntity {
  @Column()
  name: string;
}
