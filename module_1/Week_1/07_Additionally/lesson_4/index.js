const password1 = '1234f'           // не удовлетворяет условиям
const password2 = '123456'          // не удовлетворяет условиям
const password3 = '1234F'           // удовлетворяет условиям
const password4 = '12'              // не удовлетворяет условиям
const password5 = 'JavaScript'      // не удовлетворяет условиям
const password6 = 'JavaScript123'   // удовлетворяет условиям

// Условия
const number = /[0-9]/g
const letter = /[A-Z]/g

if (password6.valueOf().length >= 3 && password6.valueOf().length <= 30 && password6.valueOf().match(letter) && password6.valueOf().match(number)){
    console.log('Пароль валидный. Добро пожаловать в аккаунт!')
}else {
    console.log('Пароль не удовлетворяет условиям! Перезагрузите страницу и попробуйте ввести его еще раз.')
}