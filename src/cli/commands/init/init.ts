import { cyan, green, red } from 'colors'
import { writeFileSync } from 'fs'
import { cwd } from 'process'
import { join } from 'path'
import { configFileExt, configFileName, tronConfig } from '../../utils/configFile'
import { Command } from 'commander'
import fileGenerator from '../../utils/fileGenerator'
import { pkgJson } from '../../../templates/initFiles'
import { exec } from 'child_process'
import tsconfig from '../../../templates/tsconfig.json'

export const getJsonFile = (file: unknown): string => JSON.stringify(file, null, 2)

export const writeFilesToPath = (origin: string, ext: string) => (file: string, fileName: string, path = './'): void => writeFileSync(join(origin, path, `${fileName}.${ext}`), file)

function initFiles (name: string, path: string, createAll = false): void {
  const tronConfigFile = getJsonFile(tronConfig)

  const mkJsonFile = writeFilesToPath(path, configFileExt)

  mkJsonFile(tronConfigFile, configFileName)
  mkJsonFile(getJsonFile(pkgJson(name)), 'package')
  mkJsonFile(getJsonFile(tsconfig), 'tsconfig')

  if (createAll) {
    fileGenerator(path)
    console.log(cyan('Installing packages...'))
    exec('npm install', (err) => {
      if (err) {
        throw err
      }

      console.log(green(`App ${name} successfully created`))
    })
  }
}

function init (name: string, cmd: Command): void {
  try {
    if (!name) {
      throw new Error('Missing application name')
    }

    const path = cwd()
    const createAll: boolean = cmd.all

    console.log(cyan(`Creating inversitron configuration file${createAll ? 's' : ''}...`))

    initFiles(name, path, createAll)
  } catch (err) {
    console.error(red(err))
  }
}

export default init
