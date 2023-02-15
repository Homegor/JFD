function getDivisorsCount(number) {
    if (!Number.isInteger(number)|| number < 1) {
        console.log(number + ' должен быть целым числом и больше нуля!')
        return NaN
    }
    let divisors = Math.floor(number / 2)
        let count = 1
    for (let i = 1; i <= divisors; i++){
        if(!(number % i)){
            ++count
        }
    }return count
}
console.log(getDivisorsCount(4)); // Вернет 3 (делители - 1, 2, 4)
console.log(getDivisorsCount(5)); // Вернет 2 (делители - 1, 5)
console.log(getDivisorsCount(12)); // Вернет 6 (делители - 1, 2, 3, 4, 6, 12)
console.log(getDivisorsCount(30)); // Вернет 8 (делители - 1, 2, 3, 5, 6, 10, 15, 30)