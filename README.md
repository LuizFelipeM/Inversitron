<h1 align="left">
  <img
    alt="inversitron"
    title="inversitron"
    src="https://i.ibb.co/XFwrCRW/Inversitron-full-logo.png"
  />
</h1>

Simple DDD based micro web framework.

## Table of contents
- [About](#about)
- [Getting Started](#getting-started)
    - [Setup](#setup)
    - [Running in development mode](#running-in-development-mode)
    - [Build application for production](#build-application-for-production)
- [Usage Examples](#usage-examples)


## About 

Inversitron is a simple micro framework based on InversifyJS, TypeORM and Express, aiming to improve performance when building projects based on Domain Driven Design stategies, ensuring improvement on code style standards, provisioning good starting point to projects that will be using OOP as standard paradigm, helping with DDD approach setting up DI Container using the InversifyJS, give good starting point to API projects with `AbstractController` simple setup and all can be connected to PostgreSQL (currently this is the only option available, will be fixed soon) easily with TypeORM pre configured.

## Getting Started

Install Inversitron as a dependency:
```powershell
# locally
$ npm i inversitron
# or globaly
$ npm i -g inversitron
```

The Inversitron package comes with Inversitron, the framework itself thats used to build the application, and Tron, the CLI used to create, run and build inversitron applications.

### Setup

To start a Inversitron application run:
```powershell
$ npx tron init myapp
# or run it globally
$ tron init myapp
```

After running `init` command a simple setup will be added to the current work directory with a `tronconfig.json` file that provides Inversitron configuration about your application.

### Running in development mode

Run the application in development environment using the Tron CLI:
```powershell
$ npx tron dev
# or
$ tron dev
```

### Build application for production

In order to build Inversitron application run the `build` command (currently unavailable):
```powershell
$ npx tron build
# or
$ tron build
```

## Usage examples

Assuming that all [Getting Started](#getting-started) setup steps are already done now is possibly to setup a Post example.
In entities folder a `Post.ts` file could be added, and will be representating a database entity with the same structure like:

```typescript
/* ----- src/entities/Post.ts ----- */

@Entity()
export class Post extends BaseEntity {
  @Column({ length: 100 })
  name: string
}
```

In order to use the created `Post` entity is needed the Repository, Service and Controller to provide a web interface to access it.

The `PostRepository.ts` will look like:
```typescript
/* ----- src/repositories/PostRepository.ts ----- */

export class PostRepository extends AbstractRepository<Post> {
  constructor () {
    super(Post)
  }
}
```

The `PostService.ts` will look like:
```typescript
/* ----- src/services/PostService.ts ----- */

export class PostService extends AbstractService<Example, PostRepository> {
  constructor (
    @inject(PostRepository)
    protected readonly postRepository: PostRepository
  ) { super(postRepository) }
}
```

And the `PostController.ts` as follow:
```typescript
/* ----- src/controllers/PostController.ts ----- */

@controller('/post')
export class ExampleController extends AbstractController<Post, PostService> {
  constructor (
    @inject(PostService)
    protected readonly postService: PostService
  ) { super(postService) }
}
```

With all files you could run the application in development mode with Tron CLI and test the route in `http://localhost:8080/api/post/getAll`, the Abstract Controller/Service/Repository already has all code needed to the basic implementation of CRUD with the routes:
- GET: `/getAll`
- GET: `/getById/:id`
- POST: `/`
- PATCH: `/`
- DELETE: `/`
