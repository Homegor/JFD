const coffees = ['Latte', 'Cappuccino', 'Americano'];

let coffeeName = 'CappucCino'
    coffeeName = coffeeName.toLowerCase().trim()

const peopleCoffeesIndex = coffees.findIndex((item) => item.toLowerCase() === coffeeName)

const choice = coffees[peopleCoffeesIndex]
    if (choice){
        console.log('Держите ваш любимый кофе ' + choice + '. Он ' + (peopleCoffeesIndex + 1) + '-й по популярности в нашей кофейне.')
    }else {
        console.log('К сожалению, такого вида кофе нет в наличии')
    }