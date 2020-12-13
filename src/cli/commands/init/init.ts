import { cyan } from 'colors'
import { writeFile } from 'fs'
import { cwd } from 'process'
import tronConfig from '../../tronConfig/tronconfig'

function generateTronConfigFile (path?: string) {
  console.log(cyan('Creating tronconfig.json file...'))

  const json = JSON.stringify(tronConfig, null, 2)
  const dir = path ?? cwd()
  const fullPath = `${dir}/tronconfig.json`

  writeFile(fullPath, json, (err) => err ? console.error(err) : null)
}

function init (path?: string): void {
  generateTronConfigFile(path)
}

export default init
