import { cyan, green, red } from 'colors'
import { Command } from 'commander'
import nodemon from 'nodemon'
import readConfigFile from '../../utils/readConfigFile'

export function runInversitronApp (configPath: string): void {
  console.log(green('Starting server...'))
  const { nodemon: config } = readConfigFile(configPath)

  nodemon({
    ...config,
    env: {
      ...config.env,
      NODE_ENV: 'DEV',
      CONFIGURATION_FILE_PATH: configPath
    }
  })
    .on('log', (...args) => console.log(args))
    .on('crash', (...args) => console.error(args.map(red)))
    .on('start', () => console.log(cyan('Server started')))
    .on('restart', () => console.log(cyan('Server restarted')))
    .on('exit', () => console.log(cyan('Server shut down')))
}

const dev = (cmd: Command): void => runInversitronApp(cmd.config)

export default dev
