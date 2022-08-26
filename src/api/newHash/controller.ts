import { Get, JsonController } from 'routing-controllers'

import { getRandomHash } from '~/helpers/helpers'

@JsonController()
export class NewHashController {
  @Get('/')
  generateNewHash() {
    const hash = getRandomHash()

    return `Gerado token: ${hash}`
  }
}
