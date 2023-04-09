/*
*   Напиши, в каком порядке будет выводиться информация в консоль.
*   Не вызывай код, попробуй.
*   Самостоятельно написать правильный ответ на листочке либо в заметках.
* */

const getData = (callback) => {
    fetch('https://jsonplaceholder.typicode.com/users/1')
        .then((response) => response.json())
        .then((user) => {
            console.log('Success'); // уйдет в макрозадачу и сразу выведется так как функцию уже запустили
            callback(user);
        })
        .catch((error) => {
            console.log(error);
        });
}
getData(() => {
    console.log('user received'); // попадет в call stack и сразу вызовется после окончания работы основной функции getData = (callback)
    const promise = new Promise((resolve) => {
        setTimeout(() => {
            resolve('promise resolved'); // очередь вызова микрозадач, вызовется последняя из-за времени отклика 500 мс
        }, 500);
        console.log('in promise'); // Макро задача третья
        setTimeout(() => {
            console.log('last set timeout'); // очередь вызова микрозадач, вызовется последняя из-за времени отклика 400 мс
        }, 400);
    });
    promise.then((result) => {
        console.log(result);
    });
});
console.log('End') // первая так как функция и callback еще не вызваны

/*
* 1) Выполняется мАкрозадача
* 2) Вызывает все, что есть в очереди мИкрозадач
* 3) Вызывает все, что есть в очереди вызовов
* */

/*      Очередь вызова => =>
*   1) End
*   2) Success
*   3) user received
*   4) in promise
*   5) last set timeout
*   6) promise resolved
* */