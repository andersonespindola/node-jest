/**
 * Phone list.
 */
export const phones = [
  { id: 1, idUser: 3, phone: '99999-9999' },
  { id: 2, idUser: 1, phone: '88888-8888' },
  { id: 3, idUser: 2, phone: '77777-7777' }
]

/**
 * Find user phone.
 */
export const findUserPhone = (userId: number) =>
  phones.find(phone => phone.idUser === userId)
