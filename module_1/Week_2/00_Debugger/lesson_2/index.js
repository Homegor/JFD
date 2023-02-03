const temperatureInCelsius = Number(prompt('Введите температуру в градусах Цельсия'));
// const temperatureInCelsius = 10

if (temperatureInCelsius === 0) {
    debugger
    alert('0 градусов по Цельсию - это температура замерзания воды')
    // console.log('0 градусов по Цельсию - это температура замерзания воды')
} else if (temperatureInCelsius > 0) {
    alert('Для замерзания воды температура должна быть 0 градусов по Цельсию либо ниже');
    // console.log('Для замерзания воды температура должна быть 0 градусов по Цельсию либо ниже');
}

const temperatureInFahrenheit = (temperatureInCelsius) * 9 / 5 + 32;
    debugger
alert(`${temperatureInCelsius} градусов по Цельсию - это ${temperatureInFahrenheit} по Фаренгейту.`);
// console.log(`${temperatureInCelsius} градусов по Цельсию - это ${temperatureInFahrenheit} по Фаренгейту.`);