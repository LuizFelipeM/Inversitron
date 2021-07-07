import { AbstractController } from './controllers/AbstractController'
import { AbstractSerialEntity, AbstractUuidEntity } from './entities/AbstractEntity'
import { BaseSerialEntity, BaseUuidEntity } from './entities/BaseEntity'
import { AbstractRepository } from './repositories/AbstractRepository'
import { AbstractService } from './services/AbstractService'
import { interfaces } from 'inversify-express-utils'
import ignition from './config/startup'

export * from 'typeorm'
export * from 'inversify'
export * from 'inversify-express-utils'

export type { interfaces }

export {
  ignition,
  BaseSerialEntity as BaseEntity,
  BaseSerialEntity,
  BaseUuidEntity,
  AbstractSerialEntity as AbstractEntity,
  AbstractSerialEntity,
  AbstractUuidEntity,
  AbstractRepository,
  AbstractService,
  AbstractController
}
