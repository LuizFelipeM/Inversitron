import { readFileSync } from 'fs'
import { glob } from 'glob'
import { Container, interfaces } from 'inversify'
import { join } from 'path'
import { cwd } from 'process'
import readConfigFile from '../cli/utils/readConfigFile'

type FileContent = {
  [x: string]: interfaces.ServiceIdentifier<unknown>
}

export function buildContainer (): Promise<Container> {
  const dir = cwd()

  const configFile = readConfigFile()
  const { compilerOptions: { outDir, rootDir } } = JSON.parse(readFileSync(join(dir, 'tsconfig.json')).toString('utf-8'))

  const buildPath = (path: string, defaultPath: string) => join(outDir, path?.replace(rootDir, '') ?? defaultPath)

  const reposPath = process.env.REPOS_P ?? buildPath(configFile.repositoriesPath, 'repositories')
  const servsPath = process.env.SERVS_P ?? buildPath(configFile.servicesPath, 'services')
  const ctrlsPath = process.env.CTRLS_P ?? buildPath(configFile.controllersPath, 'controllers')

  const repositoriesPath = join(dir, reposPath)
  const servicesPath = join(dir, servsPath)
  const controllersPath = join(dir, ctrlsPath)

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
