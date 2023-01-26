let age = 20; // Number
let text = 'Hello' // String
let boolean = false // Boolean
let zero = null // null
let empty ; // Undefined
let computer = { // Object
    cpu: 'intel',
    memory: 32,
    video: true,
    mouse: null
}
let id = Symbol("id"); //Symbol
let bigNum = 10n; // BigInt

console.log(Number(age), Boolean(age), String(age));
console.log(Number(text), Boolean(text), String(text));
console.log(Number(boolean), Boolean(boolean), String(boolean));
console.log(Number(zero), Boolean(zero), String(zero));
console.log(Number(empty), Boolean(empty), String(empty));
console.log(Number(computer), Boolean(computer), String(computer));
console.log(Number(id), Boolean(id), String(id)); // Выдаст ошибку "Cannot convert a Symbol value to a number"
console.log(Number(bigNum), Boolean(bigNum), String(bigNum));
