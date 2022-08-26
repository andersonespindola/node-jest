import request from 'supertest'
import { Server } from 'http'

import { server as httpServer } from '~/server'

/**
 * Environment variables.
 */
const PORT = 3333
export let server: Server

/**
 * Start server.
 */
export const startServer = async () => {
  /**
   * Start server.
   */
  const app = await httpServer()
  server = app.listen(PORT)
}

/**
 * Close server.
 */
export const closeServer = () => server.close()

/**
 * Send generic request.
 */
export const sendRequest = (
  method: 'post' | 'get' | 'delete' | 'put',
  route: string,
  data?: Object
) => {
  return request(server)[method](route).send(data)
}
