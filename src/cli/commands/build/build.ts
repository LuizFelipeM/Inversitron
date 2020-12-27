import { cyan } from 'colors'

function buildProductionApp (): void {
  console.log(cyan('Building project'))
}

const build = (): void => buildProductionApp()

export default build
