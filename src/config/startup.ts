import { red } from 'colors'
import { app } from './app'
import { buildContainer } from './container'
import dbConnect from './dbConnect'

const ignition = Promise
  .all([
    buildContainer(),
    dbConnect(),
    app
  ])

ignition
//   .then(([container, connection, a]) => [container, connection, a(container)])
  .catch((err) => console.error(red('Failed to start server'), err))

export default ignition
