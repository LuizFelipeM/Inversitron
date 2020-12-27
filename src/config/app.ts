import { cyan, green } from 'colors'
import cors from 'cors'
import { urlencoded, json } from 'body-parser'
import { InversifyExpressServer } from 'inversify-express-utils'
import { Container } from 'inversify'

export function app (container: Container): void {
  const host = process.env.H ?? 'http://localhost'
  const port = process.env.P ?? 8080
  const rootPath = process.env.RP ?? '/'

  const server = new InversifyExpressServer(container, null, { rootPath })
  // new InversifyExpressServer(DIContainer, null, null, null, AuthProvider)

  server.setConfig(app => {
    app.use(
      cors({
        origin: process.env.CO,
        optionsSuccessStatus: 200
      })
    )
    app.use(urlencoded({ extended: true }))
    app.use(json())
  })

  const app = server.build()

  app.listen(
    port,
    () => console.log(
      green('Server is now running on:'),
      cyan(`${host}:${port}${rootPath}\n`)
    )
  )
}
