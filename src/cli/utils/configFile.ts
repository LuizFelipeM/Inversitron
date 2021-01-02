import { Settings } from 'nodemon'
import { ConnectionOptions } from 'typeorm'

export const configFileName = 'tronconfig'

export const configFileExt = 'json'

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

export const tronConfig: Partial<ITronConfig> = {
  nodemon: {
    ext: 'ts',
    exec: 'node --inspect=5858 -r ts-node/register ./src/index.ts',
    watch: ['src'],
    ignore: [
      '/*.test.ts',
      '/*.spec.ts',
      '.git',
      'node_modules',
      'build'
    ]
  },
  dev: {
    // host: 'http://localhost',
    rootPath: '/api',
    port: 8080,
    corsOrigin: '*',

    database: {
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'db_username',
      password: 'db_password',
      database: 'db_name',
      synchronize: true,
      logging: false,
      entities: ['src/**/entities/**/*.{t,j}s']
    }
  },

  prod: {
    // host: 'http://localhost',
    rootPath: '/api',
    port: 8080,
    corsOrigin: '*',

    database: {
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'db_username',
      password: 'db_password',
      database: 'db_name',
      synchronize: true,
      logging: false,
      entities: ['src/**/entities/**/*.{t,j}s']
    }
  }
}
