import { cyan } from 'colors'
import { Command } from 'commander'
import nodemon from 'nodemon'
import readConfigFile from '../../utils/readConfigFile'

export function runInversitronApp (configPath: string): void {
  const configs = readConfigFile(configPath)

  nodemon({
    ...configs.nodemon,
    spawn: true,
    env: {
      ...configs.nodemon.env,
      NODE_ENV: 'DEV',
      H: 'http://localhost',
      P: configs.dev.port ?? 8080,
      RP: configs.dev.rootPath ?? '/',
      CO: configs.dev.corsOrigin,
      CFP: configPath,
      REPOS_P: configs.repositoriesPath ?? './src/repositories',
      CTRLS_P: configs.controllersPath ?? './src/controllers',
      SERVS_P: configs.servicesPath ?? './src/services'
    }
  })
    .on('start', () => console.log(cyan('\nServer started\n')))
    .on('restart', () => console.log(cyan('\nServer restarted\n')))
    .on('exit', () => console.log(cyan('\nServer shut down\n')))
}

const dev = (cmd: Command): void => runInversitronApp(cmd.config)

export default dev
