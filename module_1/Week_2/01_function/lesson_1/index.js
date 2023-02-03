// Function declaration
const firstName1 = getName1('Egor'); // Function declaration - можно создать переменную перед функцией и будет работать
function getName1(name) {
    return 'Имя равно' + name
}
console.log('Имя равно', firstName1)

// Function expression
const getName2 = function (name){
    return 'Имя равно' + name
}
const firstName2 = getName2('Andrey') // Function expression - создается только после функции, иначе не будет работать
console.log('Имя равно', firstName2)

// Arrow function expression
const getName3 = (name) => { // function можно заменить на =>
    return 'Имя равно' + name
}
const firstName3 = getName3('Vasya')
console.log('Имя равно', firstName3)
