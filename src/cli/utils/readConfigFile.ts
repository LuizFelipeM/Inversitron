import { readFileSync } from 'fs'
import { join } from 'path'
import { cwd } from 'process'
import { configFileName } from './configFile'
import FileExt from '../enums/fileExt'
import { ITronConfig } from '../interfaces/TronConfignterfaces'

function readConfigFile (path: string = cwd()): ITronConfig {
  try {
    const configFilePath = join(path, `${configFileName}${FileExt.json}`)
    const data = readFileSync(configFilePath).toString('utf-8')

    return JSON.parse(data)
  } catch (err) {
    throw new Error(`Unable to find ${configFileName}${FileExt.json} file in ${path}`)
  }
}

export default readConfigFile
