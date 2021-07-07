import { AbstractController } from './controllers/AbstractController'
import { AbstractSerialEntity } from './entities/AbstractEntity'
import { BaseSerialEntity } from './entities/BaseEntity'
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
  AbstractSerialEntity as AbstractEntity,
  AbstractRepository,
  AbstractService,
  AbstractController
}
