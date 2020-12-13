#!/usr/bin/env node

import { program } from 'commander'
import build from './commands/build/build'
import dev from './commands/dev/dev'
import init from './commands/init/init'

program
  .name('tron')
  .version('0.1.0', '-v, --version', 'Output the current version of Tron CLI')

// init command
program
  .command('init [path]')
  .description('Create the tron configuration json file used by Tron and Inversitron')
  .action(init)

// dev command
program
  .command('dev')
  .description('Run the Inversitron app in development mode')
  .action(dev)

// build command
program
  .command('build')
  .description('Build the Inversitron app to be used in production environment')
  .action(build)

program.parse(process.argv)
