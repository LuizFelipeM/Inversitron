import { readFileSync } from 'fs'
import { join } from 'path'
import { cwd } from 'process'
import { configFileExt, configFileName, ITronConfig } from './configFile'

function readConfigFile (path: string = cwd()): ITronConfig {
  try {
    const data = readFileSync(join(path, `${configFileName}.${configFileExt}`))

    return JSON.parse(data.toString('utf-8'))
  } catch (err) {
    throw new Error(`Unable to find ${configFileName}.${configFileExt} file in ${path}`)
  }
}

export default readConfigFile
