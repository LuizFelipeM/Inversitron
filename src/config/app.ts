import { cyan, green } from 'colors'
import cors from 'cors'
import { urlencoded, json } from 'body-parser'
import { Application } from 'express'
import { InversifyExpressServer } from 'inversify-express-utils'
import { Container } from 'inversify'
import readConfigFile from '../cli/utils/readConfigFile'

export const app = (container: Container) => (a?: (app: Application) => void): void => {
  const { prod } = readConfigFile()

  const host = process.env.H
  const port = process.env.PORT ?? prod.port
  const rootPath = process.env.RP ?? prod.rootPath

  const server = new InversifyExpressServer(container, null, { rootPath })
  // new InversifyExpressServer(DIContainer, null, null, null, AuthProvider)

  server.setConfig((app) => {
    app.use(
      cors({
        origin: process.env.CO,
        optionsSuccessStatus: 200
      })
    )
    app.use(urlencoded({ extended: true }))
    app.use(json())

    if (a) {
      a(app)
    }
  })

  const app = server.build()

  app.listen(port, () =>
    console.log(
      green('Server is now running on:'),
      cyan(`${host}:${port}${rootPath}\n`)
    )
  )
}
