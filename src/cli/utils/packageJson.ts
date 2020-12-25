import { readFileSync } from 'fs'
import { cwd } from 'process'

export const getPackageJson = (): any => JSON.parse(readFileSync(`${cwd()}/package.json`, 'utf-8'))
