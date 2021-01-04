import { index, entity, controller, repository, service } from '../../../templates/initFiles'
import FileExt from '../../enums/fileExt'
import { IFilesByPath } from '../../interfaces/FilesInterfaces'

export const initFiles: IFilesByPath[] = [
  {
    path: './',
    files: [
      {
        name: 'index',
        file: index,
        ext: FileExt.ts
      }
    ]
  },
  {
    path: 'controllers',
    files: [
      {
        name: 'PostController',
        file: controller,
        ext: FileExt.ts
      }
    ]
  },
  {
    path: 'repositories',
    files: [
      {
        name: 'PostRepository',
        file: repository,
        ext: FileExt.ts
      }
    ]
  },
  {
    path: 'services',
    files: [
      {
        name: 'PostService',
        file: service,
        ext: FileExt.ts
      }
    ]
  },
  {
    path: 'domain'
  },
  {
    path: 'domain/entities',
    files: [
      {
        name: 'Post',
        file: entity,
        ext: FileExt.ts
      }
    ]
  }
]
