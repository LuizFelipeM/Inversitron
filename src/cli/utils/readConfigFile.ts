import { readFileSync } from 'fs'
import { join } from 'path'
import { cwd } from 'process'
import { fullConfigFileName, ITronConfig } from './configFile'

function readConfigFile (path: string = cwd()): ITronConfig {
  try {
    const data = readFileSync(join(path, fullConfigFileName))

    return JSON.parse(data.toString('utf-8'))
  } catch (err) {
    throw new Error(`Unable to find ${fullConfigFileName} file in ${path}`)
  }
}

export default readConfigFile
