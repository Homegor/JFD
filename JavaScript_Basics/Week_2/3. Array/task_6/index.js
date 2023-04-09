const numbers = [10, 4, 100, -5, 54, 2];
// for

let sum = 0
for (let i = 0; i < numbers.length; i++){
    sum += numbers[i] ** 3
}console.log('for ',sum)

// for...of
let sum2 = 0
for (let conclusion of numbers){
    sum2 += conclusion ** 3
}console.log('for...of', sum2)

// forEach
let sum3 = 0
numbers.forEach((number) => {
    sum3 += number ** 3
});console.log('forEach', sum3)

// reduce
let sum4 = numbers.reduce((acc, num) => {
    return acc += num ** 3
}, 0);
console.log('reduce', sum4)