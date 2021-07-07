import { Column } from 'typeorm'
import { AbstractSerialEntity, AbstractUuidEntity } from './AbstractEntity'

export class BaseSerialEntity extends AbstractSerialEntity {
  @Column()
  updatedAt: Date

  @Column()
  createdAt: Date
}

export class BaseUuidEntity extends AbstractUuidEntity {
  @Column()
  updatedAt: Date

  @Column()
  createdAt: Date
}
