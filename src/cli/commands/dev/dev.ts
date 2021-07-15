import { cyan } from 'colors'
import { Command } from 'commander'
import { readFileSync } from 'fs'
import nodemon from 'nodemon'
import { join } from 'path'
import { cwd } from 'process'
import readConfigFile from '../../utils/readConfigFile'

export function runInversitronApp (configPath?: string): void {
  const configFilePath = configPath ?? cwd()

  const configs = readConfigFile(configPath)
  const { compilerOptions: { rootDir } } = JSON.parse(readFileSync(join(configFilePath, 'tsconfig.json')).toString('utf-8'))

  nodemon({
    ...configs.nodemon,
    spawn: true,
    env: {
      ...configs.nodemon.env,
      NODE_ENV: 'DEV',
      H: 'http://localhost',
      PORT: configs.dev.port ?? 5000,
      RP: configs.dev.rootPath ?? '/',
      CO: configs.dev.corsOrigin,
      CFP: configFilePath,
      REPOS_P: configs.repositoriesPath ?? join(rootDir, 'repositories'),
      CTRLS_P: configs.controllersPath ?? join(rootDir, 'controllers'),
      SERVS_P: configs.servicesPath ?? join(rootDir, 'services')
    }
  })
    .on('start', () => console.log(cyan('\nServer started\n')))
    .on('restart', () => console.log(cyan('\nServer restarted\n')))
    .on('exit', () => console.log(cyan('\nServer shut down\n')))
}

const dev = (cmd: Command): void => runInversitronApp(cmd.config)

export default dev
