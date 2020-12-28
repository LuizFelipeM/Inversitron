import { red } from 'colors'

function buildProductionApp (): void {
  const notImplemented = red('Build command not implemented')
  throw new Error(notImplemented)
}

const build = (): void => buildProductionApp()

export default build
