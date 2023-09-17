export function generateAuthError(message) {
  switch (message) {
    case 'INVALID_PASSWORD':
      return 'Email или пароль введены неверно'
    case 'EMAIL_EXISTS':
      return 'Пользователь с таким Email уже существует'
    case 'USER_DISABLED':
      return 'Подозрительная удален'
    default:
      return 'Подозрительная активность. Пользователь заблокирован.'
  }
}
