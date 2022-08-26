import { users } from '~/api/user/controller'
import { startServer, closeServer, sendRequest } from '../helpers/server'

describe('[E2E] Busca de usuário', () => {
  /**
   * Connect to a new in-memory database before running any tests.
   */
  beforeAll(startServer)

  /**
   * Remove and close the db and server.
   */
  afterAll(closeServer)

  test('Deve retornar as informações de um usuário', async () => {
    /**
     * Create hash.
     */
    const userId = 3

    /**
     * Request.
     */
    const foundUser = await sendRequest('get', `/${userId}`)

    /**
     * Get user with id 3.
     */
    const expectedUser = users.find(user => user.id === userId)

    /**
     * Expect.
     */
    expect(foundUser.body).toMatchObject({
      id: expectedUser?.id,
      name: expectedUser?.name,
      email: expectedUser?.email
    })
  })

  test('Deve retornar um erro quando for procurado um usuário inexistente', async () => {
    /**
     * Create hash.
     */
    const userId = 9999

    /**
     * Request.
     */
    const foundUser = await sendRequest('get', `/${userId}`)

    /**
     * Expect.
     */
    expect(foundUser.body).toMatchObject({ message: 'User not found' })
  })
})
