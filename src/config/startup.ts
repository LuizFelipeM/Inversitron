import { app } from './app'
import { buildContainer } from './container'
import dbConnect from './dbConnect'

Promise
  .all([
    buildContainer(),
    dbConnect()
  ])
  .then(([container]) => app(container))
  .catch((err) => console.error('Startup'.red, err))
