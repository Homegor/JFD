// 1
console.log(Number(' 1 2 3 4 5')); // Возвращает 12345, нет так как числа через пробел по этому NaN
// 2
console.log(Number('1234 5')); // Возвращает число 12345, нет так как числа через пробел по этому NaN
// 3
console.log(Number('12345')); // Возвращает число 12345
// 4
console.log(String(false)); // Возвращает false
// 5
console.log(Boolean(0000000)); // Возвращает true, нет так как число = или < 0 вернет false
// 6
console.log(Boolean(0.0000001)); // Возвращает true
// 7
console.log(String(undefined)); // Возвращает пустое значение
// 8
console.log(Number('100f')); // Возвращает число 100, нет так как присутствует буква по этому NaN
// 9
console.log(Number('100')); // Возвращает число 100
// 10
console.log(Number('000001')); // Возвращает число 1