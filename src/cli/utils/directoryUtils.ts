import { writeFileSync, existsSync, mkdirSync } from 'fs'
import { join, resolve } from 'path'
import FileExt from '../enums/fileExt'

export const makeFilesInDirectory = (origin: string) => (content: string, name: string, ext: FileExt, path = './'): void => {
  const filePath = resolve(origin, path, name + ext)
  writeFileSync(filePath, content)
}

export const makeDirectoriesInOrigin = (origin: string) => (path: string): void => {
  const org = join(origin)
  const dir = join(org, path)

  if (!existsSync(org)) {
    mkdirSync(org)
  }

  if (!existsSync(dir)) {
    mkdirSync(dir)
  }
}
