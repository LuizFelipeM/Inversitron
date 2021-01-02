import { existsSync, mkdirSync, writeFileSync } from 'fs'
import { join, resolve } from 'path'
import { cwd } from 'process'
import { filesByPath } from './paths'

export const writeFilesToPath = (origin: string, ext: string) => (file: string, fileName: string, path = './'): void => writeFileSync(resolve(origin, path, `${fileName}.${ext}`), file)

export const makeDirectory = (origin: string) => (path: string): void => {
  const org = join(origin)
  const dir = join(org, path)

  if (!existsSync(org)) {
    mkdirSync(org)
  }

  if (!existsSync(dir)) {
    mkdirSync(dir)
  }
}

export default function fileGenerator (rootPath: string = cwd()): void {
  const mkDir = makeDirectory(`${rootPath}/src`)
  const mkFile = writeFilesToPath(`${rootPath}/src`, 'ts')

  filesByPath.forEach(({ path, files }) => {
    mkDir(path)

    files?.forEach(f => mkFile(f.file, f.name, path))
  })
}
