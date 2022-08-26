import { Get, JsonController, Param } from 'routing-controllers'

export const users = [
  { id: 1, name: 'Anderson Espindola', email: 'anderson@example.com' },
  { id: 2, name: 'Roberto Umbelino', email: 'roberto@example.com' },
  { id: 3, name: 'Pablo Danilo', email: 'pablo@example.com' }
]

@JsonController()
export class UserController {
  @Get('/:id')
  getUser(@Param('id') id: string) {
    /**
     * Find user.
     */
    const foundUser = users.find(user => user.id === +id)

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
