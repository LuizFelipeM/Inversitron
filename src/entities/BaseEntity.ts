import { Column, ColumnOptions } from 'typeorm'
import { AbstractSerialEntity, AbstractUuidEntity } from './AbstractEntity'

const timestampWithDefault: ColumnOptions = { type: 'timestamp', default: () => 'NOW()' }

export class BaseSerialEntity extends AbstractSerialEntity {
  @Column(timestampWithDefault)
  updatedAt: Date

  @Column(timestampWithDefault)
  createdAt: Date
}

export class BaseUuidEntity extends AbstractUuidEntity {
  @Column(timestampWithDefault)
  updatedAt: Date

  @Column(timestampWithDefault)
  createdAt: Date
}
