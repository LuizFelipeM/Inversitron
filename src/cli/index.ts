#!/usr/bin/env node

import { program } from 'commander'
import build from './commands/build/build'
import dev from './commands/dev/dev'
import init from './commands/init/init'

program
  .name('tron')
  .version('0.3.4', '-v, --version', 'output the current version of Tron CLI')

// init command
program
  .command('init <name>')
  .description('create the tron configuration json file used by Tron and Inversitron')
  .option('-a, --all', 'Create all folders and files to DDD project structure')
  .action(init)

// dev command
program
  .command('dev')
  .description('run the Inversitron app in development mode')
  .option('-c, --config <file>', 'Specify an alternative path to the tronconfig.json file')
  .action(dev)

// build command
program
  .command('build')
  .description('build the Inversitron app to be used in production environment')
  .action(build)

program.parse(process.argv)
