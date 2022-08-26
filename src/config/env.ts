import { config } from 'dotenv'
import { resolve } from 'path'

config({ path: resolve(__dirname, '..', '..', '.env') })

export const { PORT = 3000, NODE_ENV } = process.env
