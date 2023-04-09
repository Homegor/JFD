const clientsEstimations = []
function askClientToGiveEstimation(stars){
    for (let i = 0; i < 5; i++){ // тут возможно ошибка так как [i] не используется
        console.log('Как вы оцениваете нашу кофейню от 1 до 10?')
        clientsEstimations.push(stars)
        if (stars > 5) {
            const goodEstimations = clientsEstimations.filter((item) => {
                return item > 5
            });return console.log('Всего положительных оценок: ', goodEstimations.length)
        }else if(stars <= 5){
            const notGoodEstimations = clientsEstimations.filter((item) => {
                return item <= 5
            });return console.log('Всего отрицательных оценок: ', notGoodEstimations.length)
        }
    } console.log(clientsEstimations.length)
}

askClientToGiveEstimation(5)
askClientToGiveEstimation(3)
askClientToGiveEstimation(8)
askClientToGiveEstimation(9)
askClientToGiveEstimation(2)
askClientToGiveEstimation(9)

// Вроде бы работает, вроде даже правильно, но если подставить alert и prompt выходит лютая дичь + я не понимаю как вывести предложение "Всего оценок положительных\отрицательных" без дублирования в разных циклах