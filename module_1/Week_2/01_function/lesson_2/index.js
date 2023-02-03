function getSumOfNumbers(number , type = 'odd'){
    if(!number || typeof number != 'number'){
        return NaN
    }
    let sum = 0
    for (let i = 0; i <= number; i++){
        if(type === ''){
            sum += i
        }else if(type === 'event'){
            if(i % 2 === 0){
                sum += i
            }
        }else if(type === 'odd'){
            if(i % 2 !== 0){
                sum += i
            }
        }
    }return sum
}
console.log(getSumOfNumbers(10, '')) // Все
console.log(getSumOfNumbers(10, 'event')) // Чет
console.log(getSumOfNumbers(10, 'odd')) //Нечет