import { green, red } from 'colors'
import { cwd } from 'process'
import { configFileName, tronConfig } from '../../utils/configFile'
import fileGenerator from '../../utils/fileGenerator'
import { exec } from 'child_process'
import { initFiles } from './initFiles'
import packageGenerator from '../../../templates/packageGenarator'
import tsconfig from '../../../templates/tsconfig'
import { makeFilesInDirectory } from '../../utils/directoryUtils'
import FileExt from '../../enums/fileExt'
import { convertToJson } from '../../utils/convertUtils'
import ora from 'ora'

function createFiles (name: string): void {
  const loading = ora({
    color: 'cyan',
    spinner: 'simpleDotsScrolling'
  })

  loading.start('Creating Inversitron configuration files')

  const path = cwd()

  const packageJson = convertToJson(packageGenerator(name))
  const tsconfigJson = convertToJson(tsconfig)
  const tronConfigJson = convertToJson(tronConfig)

  const mkFiles = makeFilesInDirectory(path)

  mkFiles(tronConfigJson, configFileName, FileExt.json)
  mkFiles(packageJson, 'package', FileExt.json)
  mkFiles(tsconfigJson, 'tsconfig', FileExt.json)

  fileGenerator(`${path}/src`, initFiles)

  loading.succeed(green('All files created'))
  loading.start('Installing packages')

  exec('npm install', (err) => {
    if (err) {
      loading.fail(red(`Package installation ${err}`))
    }

    loading.succeed(green(`Packages installed, app ${name} successfully created`))
  })
}

function init (name: string): void {
  try {
    if (!name) {
      throw new Error('Missing application name')
    }

    createFiles(name)
  } catch (err) {
    console.error(red(err))
  }
}

export default init
