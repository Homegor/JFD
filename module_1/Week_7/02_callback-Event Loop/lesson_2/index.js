/*
*   Напиши, в каком порядке будет выводиться информация в консоль.
*   Не вызывай код, попробуй.
*   Самостоятельно написать правильный ответ на листочке либо в заметках.
* */

function runCode() {
    console.log('before promise'); // уйдет в микрозадачу первая
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Zero Promise'); // уйдет в вызов вторая
            resolve();
        }, 0);
    });
}
setTimeout(() => {
    console.log('Zero'); // уйдет в очередь вызова первая
}, 0);
runCode().then(() => console.log('Zero Promise Invoked')); // уйдет в микрозадачу тертья
console.log('One'); //Микрозадача вторая

/*
* 1) Выполняется мАкрозадача
* 2) Вызывает все, что есть в очереди мИкрозадач
* 3) Вызывает все, что есть в очереди вызовов
* */

/*      Вывод =>
*   1) before promise (Первая)
*   2) Zero Promise (четвертая)
*   3) Zero (третья)
*   4) Zero Promise Invoked (Пятая)
*   5) One (Вторая)
* */