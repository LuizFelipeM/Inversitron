import { glob } from 'glob'
import { Container, interfaces } from 'inversify'
import { join } from 'path'
import { cwd } from 'process'

type FileContent = {
  [x: string]: interfaces.ServiceIdentifier<unknown>
}

export function buildContainer (): Promise<Container> {
  const dir = cwd()

  const repositoriesPath = join(dir, process.env.REPOS_P ?? './src/repositories')
  const servicesPath = join(dir, process.env.SERVS_P ?? './src/services')
  const controllersPath = join(dir, process.env.CTRLS_P ?? './src/controllers')

  const promiseContainer = new Promise<Container>((resolve, reject) => {
    try {
      /**
       * Container CONTROLLERS, REPOSITORIES and SERVICES binding configuration
       */
      const controllersReposAndServices = glob.sync(`{${repositoriesPath},${servicesPath},${controllersPath}}/**/*{Repository,Service,Controller}.{ts,js}`)
      const importControllersReposAndServices = controllersReposAndServices.map(file => import(file))

      Promise
        .all(importControllersReposAndServices)
        .then((values: Array<FileContent>) => {
          const container = new Container()

          values.forEach(val => {
            for (const key in val) {
              if (Object.prototype.hasOwnProperty.call(val, key)) {
                container.bind(val[key]).toSelf()
              }
            }
          })

          resolve(container)
        })
        .catch(reject)
    } catch (err) {
      reject(err)
    }
  })

  return promiseContainer
}
