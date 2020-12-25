import { green } from 'colors'
import { Connection, createConnection } from 'typeorm'
import readConfigFile from '../cli/utils/readConfigFile'
import { isDevEnv } from '../utils/environments'

async function dbConnect (): Promise<Connection> {
  const { dev, prod } = readConfigFile(process.env.CONFIGURATION_FILE_PATH)
  const connection = await createConnection(isDevEnv ? dev.database : prod.database)

  console.log(green('Database connection succeeded'))

  return connection
}

export default dbConnect
