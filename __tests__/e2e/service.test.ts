import request from 'supertest'

import { users } from '~/api/user/services/finder'
import { phones } from '~/api/user/services/phone'
import { startServer, closeServer, server } from '../helpers/server'

describe('[E2E] Busca de usuário', () => {
  /**
   * Start server.
   */
  beforeAll(startServer)

  /**
   * Close server.
   */
  afterAll(closeServer)

  test('Deve retornar as informações de um usuário', async () => {
    /**
     * User id.
     */
    const userId = 3

    /**
     * Request.
     */
    const foundUser = await request(server).get(`/${userId}`)

    /**
     * Get user with id 3.
     */
    const expectedUser = users.find(user => user.id === userId)

    /**
     * Get user phone.
     */
    const expectedPhone = phones.find(phone => phone.idUser === userId)

    /**
     * Expect.
     */
    expect(foundUser.body).toMatchObject({
      id: expectedUser?.id,
      name: expectedUser?.name,
      email: expectedUser?.email,

      phone: expectedPhone
    })
  })

  test('Deve retornar um erro quando for procurado um usuário inexistente', async () => {
    /**
     * User id.
     */
    const userId = 9999

    /**
     * Request.
     */
    const foundUser = await request(server).get(`/${userId}`)

    /**
     * Expect.
     */
    expect(foundUser.body).toMatchObject({ message: 'User not found' })
  })
})
