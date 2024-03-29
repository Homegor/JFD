/*
*   Напиши, в каком порядке будет выводиться информация в консоль.
*   Не вызывай код, попробуй.
*   Самостоятельно написать правильный ответ на листочке либо в заметках.
* */

setTimeout(() => {
    console.log('setTimeout'); // микрозадачи выполнится в последнюю очередь
}, 0);
const promise = new Promise((resolve) => {
    console.log('Promise'); // уйдет в вызов так как обычная переменная перед вызовом промиса
    resolve();
});
promise.then(() => {
    console.log('Promise resolve'); // уйдет в макрозадачу так как вызываются в первую очередь
});
console.log('End'); // уйдет в вызов так как вызывается второй

/*
* 1) Выполняется мАкрозадача
* 2) Вызывает все, что есть в очереди мИкрозадач
* 3) Вызывает все, что есть в очереди вызовов
* */

/*      Очередь вызова =>
*   1) Promise
*   2) End
*   3) Promise resolve
*   4) setTimeout
* */