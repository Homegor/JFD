let numbers = [10, 4, 100, -5, 54, 2]
let numbers1 = [10, 4, 100, -5, 54, 2]
let sum = 0;

// Через цикл for
for (let i = 0; i < numbers.length; i += 1) {
    numbers[i] = numbers[i] ** 3;
    sum += numbers[i];
    debugger
}
console.log(sum);

// Через цикл for of
sum = 0;
for (let num of numbers1){ // Во втором цикле numbers принимает первое оконченное значение массива из-за чего число больше
    num = num ** 3;
    sum += num;
    debugger
}
console.log(sum);
debugger