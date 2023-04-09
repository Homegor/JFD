let correctAnswers = 0; // Правильные
let incorrectAnswers  = 0; // НЕ Правильные

const question1 = Number(prompt('Сколько будет 2 + 2?'))
if (question1 === 4){
    alert('Ответ верный')
    ++correctAnswers;
}else {
    alert('Ответ не верный')
    ++incorrectAnswers;
}
const question2 = Number(prompt('Сколько будет 2 * 2?'))
if (question2 === 4){
    alert('Ответ верный')
    ++correctAnswers;
}else {
    alert('Ответ не верный')
    ++incorrectAnswers;
}
const question3 = Number(prompt('У Пети было 5 яблок. 3 из них он съел, 1 отдал другу. Сколько яблок у Пети осталось?'))
if (question3 === 1){
    alert('Ответ верный')
    ++correctAnswers;
}else {
    alert('Ответ не верный')
    ++incorrectAnswers;
}
const question4 = Number(prompt('У Маши было 10 конфет. 2 она съела, 1 отдала другу. После мама дала Маше еще 5 конфет. Сколько в итоге конфет осталось у Маши?'))
if (question4 === 14){
    alert('Ответ верный')
    ++correctAnswers;
}else {
    alert('Ответ не верный')
    ++incorrectAnswers;
}
const question5 = Number(prompt('Сколько будет 2 + 2 * 2?'))
if (question5 === 6){
    alert('Ответ верный')
    ++correctAnswers;
}else {
    alert('Ответ не верный')
    ++incorrectAnswers;
}

alert('Конец теста! Правильные ответы - ' + `${correctAnswers}` + '; Неправильные ответы - ' + `${incorrectAnswers}` + '.')