import { users } from '~/api/user/services/finder'
import { findUser } from '~/api/user/services/finder'

describe('[INTEGRAÇÃO] Busca de usuário', () => {
  test('Deve retornar as informações do usuário', () => {
    /**
     * User id.
     */
    const userId = 2

    /**
     * Find user.
     */
    const foundUser = findUser(userId)

    /**
     * Get user with id 3.
     */
    const expectedUser = users.find(user => user.id === userId)

    /**
     * Expect.
     */
    expect(foundUser).toMatchObject({
      id: expectedUser?.id,
      name: expectedUser?.name,
      email: expectedUser?.email
    })
  })

  test('Não deve retornar informações quando for enviado um id inexistente', () => {
    /**
     * User id.
     */
    const userId = 9999

    /**
     * Find user.
     */
    const foundUser = findUser(userId)

    /**
     * Expect.
     */
    expect(foundUser).toBeUndefined()
  })
})
