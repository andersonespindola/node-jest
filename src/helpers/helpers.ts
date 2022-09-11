const allowedCharacters = 'abcdefghijklmnopqrstuvwxyz0123456789'

export const getRandomHash = () =>
  new Array(6)
    .fill('')
    .map(() =>
      allowedCharacters.charAt(
        Math.floor(Math.random() * allowedCharacters.length)
      )
    )
    .join('')
