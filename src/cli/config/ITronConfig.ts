import { ConnectionOptions } from 'typeorm'

interface IEnvironmentConfig {
  rootPath: string
  port: number
  corsOrigin: string | '*'
  database: ConnectionOptions
}

export default interface ITronConfig {
  dev: IEnvironmentConfig
  prod: IEnvironmentConfig
}
