import ITronConfig from './ITronConfig'

const tronConfig: ITronConfig = {
  dev: {
    // host: 'http://localhost',
    rootPath: '/api',
    port: 8080,
    corsOrigin: '*',

    database: {
      type: 'postgres',
      host: 'localhost',
      port: 3306,
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
      port: 3306,
      username: 'db_username',
      password: 'db_password',
      database: 'db_name',
      synchronize: true,
      logging: false,
      entities: ['src/**/entities/**/*.{t,j}s']
    }
  }
}

export default tronConfig
