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
