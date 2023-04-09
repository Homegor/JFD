let health = Number(prompt('Введите число параметра "здоровье" для персонажа'))
// let health = 10
if (health < 0 || !health) {
    debugger
    // console.log('Параметр "здоровье" должен быть больше нуля!')
    alert('Параметр "здоровье" должен быть больше нуля!')
} else {
    debugger
    // console.log(`Параметр здоровье равен ${health}`);
    alert(`Параметр здоровье равен ${health}`);
}