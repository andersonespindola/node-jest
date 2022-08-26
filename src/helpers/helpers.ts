import { customAlphabet } from 'nanoid'

export const getRandomHash = () =>
  customAlphabet('abcdefghijklmnopqrstuvwxyz0987654321', 6)()
