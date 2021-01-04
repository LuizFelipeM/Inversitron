import { IFilesByPath } from '../interfaces/FilesInterfaces'
import { makeDirectoriesInOrigin, makeFilesInDirectory } from './directoryUtils'

export default function fileGenerator (rootPath: string, filesByPath: IFilesByPath[]): void {
  const mkDir = makeDirectoriesInOrigin(rootPath)
  const mkFiles = makeFilesInDirectory(rootPath)

  filesByPath.forEach(({ path, files }) => {
    mkDir(path)

    files?.forEach(file => mkFiles(file.file, file.name, file.ext, path))
  })
}
