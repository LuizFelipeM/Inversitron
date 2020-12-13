import { cyan } from 'colors'
import { writeFile } from 'fs'
import { cwd } from 'process'
import tronConfig from '../../config/tronConfig'

export const getFullDirPath = (path?: string): string => `${path ?? cwd()}/tronconfig.json`

export const getJsonFile = (file: unknown): string => JSON.stringify(file, null, 2)

export const generateTronConfigFile = (path: string, file: string): void => writeFile(path, file, (err) => err ? console.error(err) : null)

function init (path?: string): void {
  console.log(cyan('Creating tronconfig.json file...'))

  const fullPath = getFullDirPath(path)
  const file = getJsonFile(tronConfig)

  generateTronConfigFile(fullPath, file)
}

export default init
