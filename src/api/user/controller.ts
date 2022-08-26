import { Get, JsonController, Param } from 'routing-controllers'

import { findUser } from './service'

@JsonController()
export class UserController {
  @Get('/:id')
  getUser(@Param('id') id: string) {
    /**
     * Find user.
     */
    const foundUser = findUser(+id)

    /**
     * Throw error if user is not found.
     */
    if (!foundUser) throw new Error('User not found')

    /**
     * Return user.
     */
    return foundUser
  }
}
