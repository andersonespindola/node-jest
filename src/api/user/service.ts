/**
 * Users list.
 */
export const users = [
  { id: 1, name: 'Anderson Espindola', email: 'anderson@example.com' },
  { id: 2, name: 'Roberto Umbelino', email: 'roberto@example.com' },
  { id: 3, name: 'Pablo Danilo', email: 'pablo@example.com' }
]

/**
 * Find user.
 */
export const findUser = (id: number) => {
  /**
   * Log.
   */
  console.log(`Buscando usuário com o id: ${id}`)

  /**
   * Find user.
   */
  const foundUser = users.find(user => user.id === id)

  /**
   * Log.
   */
  console.log(`Usuário encontrado: ${JSON.stringify(foundUser)}`)

  return foundUser
}
