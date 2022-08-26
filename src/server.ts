import 'reflect-metadata'
import express from 'express'
import {
  useExpressServer,
  RoutingControllersOptions
} from 'routing-controllers'

import controllers from './api/controllers'

/**
 * Server configuration.
 */
const expressConfig: RoutingControllersOptions = {
  cors: '*',
  controllers
}

/**
 * Create server.
 */
export const server = () => {
  const app = express()
  useExpressServer(app, expressConfig)

  return app
}
