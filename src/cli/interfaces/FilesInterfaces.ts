import FileExt from '../enums/fileExt'

export interface IFile {
  name: string
  file: string
  ext: FileExt
}

export interface IFilesByPath {
  path: string
  files?: IFile[]
}
