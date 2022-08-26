import { getRandomHash } from '~/helpers/helpers'

describe('[UNITÁRIO] Retornar um hash', () => {
  test('Deve ser uma função', () => {
    expect(typeof getRandomHash).toEqual('function')
  })

  test('Deve retornar uma string', () => {
    const newHash = getRandomHash()

    expect(newHash).toEqual(expect.any(String))
  })

  test('Deve retornar 6 caracteres', () => {
    const newHash = getRandomHash()

    expect(newHash.length).toEqual(6)
  })
})
