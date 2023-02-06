const coffees = ['Latte', 'Cappuccino', 'Americano'];
const prices = [1.5, 1, 2];
const updatedPrices = prices.map((item) =>{
    return item * 2
})
coffees.forEach((name,index) => console.log(`Кофе ${name} сейчас стоит ${updatedPrices[index]} евро`))