import { findUserPhone } from './phone'

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
   * Find user.
   */
  const foundUser = users.find(user => user.id === id)

  /**
   * Not found.
   */
  if (!foundUser) return foundUser

  /**
   * Find user phone.
   */
  const foundPhone = findUserPhone(foundUser.id)

  return { ...foundUser, phone: foundPhone }
}
