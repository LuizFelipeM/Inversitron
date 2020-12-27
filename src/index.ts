import { AbstractController } from './controllers/AbstractController'
import { AbstractEntity } from './entities/AbstractEntity'
import { BaseEntity } from './entities/BaseEntity'
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
  BaseEntity,
  AbstractEntity,
  AbstractRepository,
  AbstractService,
  AbstractController
}
