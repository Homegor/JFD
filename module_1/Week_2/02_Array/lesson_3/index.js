const coffees = ['','Latte', 'Cappuccino', 'Americano']; // пустое значение нужно для Latte = index 1 иначе Latte = index 0
let coffeesName = 'Americano'.trim()

const foundIndex = coffees.findIndex((item) => {
    return item === coffeesName;
});

console.log(`Держите ваш любимый кофе ${coffeesName.slice(0,1).toUpperCase() + coffeesName.slice(1).toLowerCase()} . Он ${foundIndex}-й по популярности в нашей кофейне.`); // Название кофе должно быть регистронезависимым, т.е. если пользователь напечатает “lATte”, то должен показаться результат с кофе “Latte”.


// Если ввести напиток перепутав регистры, во всех случаях выдаст (-1)