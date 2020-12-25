import { cyan, red } from 'colors'
import { writeFileSync } from 'fs'
import { cwd } from 'process'
import { join } from 'path'
import { fullConfigFileName, tronConfig } from '../../utils/configFile'
import { Command } from 'commander'

export const getJsonFile = (file: unknown): string => JSON.stringify(file, null, 2)

export const writeFilesToPath = (path: string) => (file: string, fileName: string): void => writeFileSync(join(path, fileName), file)

function initFiles (path: string): void {
  const tronConfigFile = getJsonFile(tronConfig)

  const pathSelected = writeFilesToPath(path)

  pathSelected(tronConfigFile, fullConfigFileName)
}

function init (path: string = cwd(), cmd: Command): void {
  try {
    const createAll: boolean = cmd.all

    console.log(cyan(`Creating inversitron configuration file${createAll ? 's' : ''}...`))

    initFiles(path)
  } catch (err) {
    console.error(red(err))
  }
}

export default init
