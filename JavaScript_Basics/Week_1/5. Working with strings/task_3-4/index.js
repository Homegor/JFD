// task 3

const userName = prompt('Как вас зовут:');

alert(userName.trim().toLowerCase()) // Выводим результат убирая все ненужные пробелы

// task 4

const userAge = Number(prompt('Сколько вам лет?'));

alert(`${userAge + 1}`.trim()) // Преобразовано к типу данных number
//(Если добавить символ выдаст NaN, надо исправить)
