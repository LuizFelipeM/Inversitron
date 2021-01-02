import { index, Post, PostController, PostRepository, PostService } from '../../templates/initFiles'

interface IFile {
  name: string
  file: string
}

interface IFilesByPath {
  path: string
  files?: IFile[]
}

export const filesByPath: IFilesByPath[] = [
  {
    path: './',
    files: [
      {
        name: 'index',
        file: index
      }
    ]
  },
  {
    path: 'controllers',
    files: [
      {
        name: 'PostController',
        file: PostController
      }
    ]
  },
  {
    path: 'repositories',
    files: [
      {
        name: 'PostRepository',
        file: PostRepository
      }
    ]
  },
  {
    path: 'services',
    files: [
      {
        name: 'PostService',
        file: PostService
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
        file: Post
      }
    ]
  }
]
