import { Settings } from 'nodemon'
import { ConnectionOptions } from 'typeorm'

interface IEnvironmentConfig {
  rootPath: string
  port: number
  corsOrigin: string | '*'
  database: ConnectionOptions
}

export interface ITronConfig {
  repositoriesPath: string
  controllersPath: string
  servicesPath: string
  nodemon: Settings
  dev: IEnvironmentConfig
  prod: IEnvironmentConfig
}
