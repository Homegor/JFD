const mark = [">", "<", "=", "+", "-", "*", "/"]
const isNumber = (item) => !isNaN(item) && !isNaN(parseFloat(item))
const getMathResult = (expression) => {
    let sumExpression = [...expression]

    if(expression.length > 3){
        sumExpression = sumExpression.filter((item) => isNumber(item) || mark.includes(item))
    }

    const firstNum = Number(sumExpression[0])
    const lastNum = Number(sumExpression[sumExpression.length - 1])
    const sign = sumExpression[1]

    if(sumExpression.length < 3 || expression.length < 3 || !isNumber(firstNum) || !isNumber(lastNum) || mark.includes(sign)){
        return 'Ошибка'
    }

    let total = 0
    switch (sign) {
        case '/':
            total = firstNum / lastNum
        break
        case '*':
            total = firstNum * lastNum
            break
        case '-':
            total = firstNum - lastNum
            break
        case '+':
            total = firstNum + lastNum
            break
        case '=':
            total = firstNum === lastNum
            break
        case '>':
            total = firstNum > lastNum
            break
        case '<':
            total = firstNum < lastNum
            break
        default:
            return 'Ошибка'
    }
    return total
}

console.log(getMathResult(["100", "hello", "javascript", "help200", "+", 4]))
console.log(getMathResult(['200', '+', 300])) // 500
console.log(getMathResult(['20', '-', '5'])) // 15
console.log(getMathResult([100, '/', 100])) // 1
console.log(getMathResult([2, '-', 2])) // 0
console.log(getMathResult(['5', '>', '10'])) // false
console.log(getMathResult(['5', '<', '10'])) // true
console.log(getMathResult(['1', '=', 1])) // true
console.log(getMathResult(['1', '**', 1])) // 'Ошибка'
console.log(getMathResult(['+', '100', 10])) // 'Ошибка'