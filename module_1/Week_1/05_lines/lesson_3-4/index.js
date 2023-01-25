// task 3

const userName = prompt('Как вас зовут:');
const res = userName.toLowerCase() + userName.slice(1) // Возвращаем первый символ в виде заглавной буквы, убираем второй символ

alert(res.trim()) // Выводим результат убирая все ненужные пробелы

// task 4

const userAge = prompt('Сколько вам лет?')

alert(Number(userAge.trim())) // Преобразовано к типу данных number