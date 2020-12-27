import { red } from 'colors'
import { app } from './app'
import { buildContainer } from './container'
import dbConnect from './dbConnect'

const ignition = Promise
  .all([
    buildContainer(),
    dbConnect()
  ])

ignition
  .then(([container]) => app(container))
  .catch((err) => console.error(red('Failed to start server'), err))

export default ignition
