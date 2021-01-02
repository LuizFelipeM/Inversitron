export const PostController = "import { controller, AbstractController, inject } from 'inversitron'\r\nimport { Post } from '../domain/entities/Post'\r\nimport { PostService } from '../services/PostService'\r\n\r\n@controller('/post')\r\nexport class ExampleController extends AbstractController<Post, PostService> {\r\n  constructor (\r\n    @inject(PostService)\r\n    protected readonly postService: PostService\r\n  ) { super(postService) }\r\n}"
export const Post = "import { Entity, Column, BaseEntity } from 'inversitron'\r\n\r\n@Entity()\r\nexport class Post extends BaseEntity {\r\n  @Column({ length: 100 })\r\n  name: string\r\n}"
export const PostRepository = "import { AbstractRepository } from 'inversitron'\r\nimport { Post } from '../domain/entities/Post'\r\n\r\nexport class PostRepository extends AbstractRepository<Post> {\r\n  constructor () {\r\n    super(Post)\r\n  }\r\n}"
export const PostService = "import { AbstractService, inject } from 'inversitron'\r\nimport { PostRepository } from '../repositories/PostRepository'\r\nimport { Post } from '../domain/entities/Post'\r\n\r\nexport class PostService extends AbstractService<Post, PostRepository> {\r\n  constructor (\r\n    @inject(PostRepository)\r\n    protected readonly postRepository: PostRepository\r\n  ) { super(postRepository) }\r\n}"
export const index = "import 'reflect-metadata'\r\nimport import { ignition } from 'inversitron'\r\n\r\nignition.then(() => console.log('Server started'))"
export const pkgJson = (name: string): any => ({
  name,
  version: '1.0.0',
  description: '',
  main: 'index.ts',
  scripts: {
    start: 'npx tron dev',
    build: 'npx tron build',
    test: 'echo "Error: no test specified" && exit 1'
  },
  keywords: [],
  author: '',
  license: 'ISC',
  dependencies: {
    'reflect-metadata': '^0.1.13',
    inversitron: '^0.3.4',
    pg: '^8.5.1'
  },
  devDependencies: {
    '@types/node': '^14.14.10',
    'ts-node': '^9.0.0',
    typescript: '^4.1.2'
  }
})
