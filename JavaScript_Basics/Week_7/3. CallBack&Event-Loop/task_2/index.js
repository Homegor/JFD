/*
*   Напиши, в каком порядке будет выводиться информация в консоль.
*   Не вызывай код, попробуй.
*   Самостоятельно написать правильный ответ на листочке либо в заметках.
* */

function runCode() {
    console.log('before promise'); // Вызовется первая, так как функция по коду вызовется в первую очередь
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Zero Promise'); // уйдет вторым в микрозадачи
            resolve();
        }, 0);
    });
}
setTimeout(() => {
    console.log('Zero'); // будет добавлена самая первая в call Stack микрозадач
}, 0);
runCode().then(() => console.log('Zero Promise Invoked')); // выйдет после срабатывания resolve()
console.log('One'); // вторая после вывода функции

/*
* 1) Выполняется мАкрозадача
* 2) Вызывает все, что есть в очереди мИкрозадач
* 3) Вызывает все, что есть в очереди вызовов
* */

/*      Очередь вызова => =>
*   1) before promise
*   2) One
*   3) Zero
*   4) Zero Promise
*   5) Zero Promise Invoked
* */