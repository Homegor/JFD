/*
*   Напиши, в каком порядке будет выводиться информация в консоль.
*   Не вызывай код, попробуй.
*   Самостоятельно написать правильный ответ на листочке либо в заметках.
* */

const getData = (callback) => {
    fetch('https://jsonplaceholder.typicode.com/users/1')
        .then((response) => response.json())
        .then((user) => {
            console.log('Success'); // МикроЗадача первая
            callback(user);
        })
        .catch((error) => {
            console.log(error);
        });
}
getData(() => {
    console.log('user received'); // Макрозадача первая
    const promise = new Promise((resolve) => {
        setTimeout(() => {
            resolve('promise resolved'); // Очередь вызова вторая
        }, 500);
        console.log('in promise'); // Макро задача третья
        setTimeout(() => {
            console.log('last set timeout'); // Очередь вызова первая
        }, 400);
    });
    promise.then((result) => {
        console.log(result);
    });
});
console.log('End') // Макрозадача вторая

/*
* 1) Выполняется мАкрозадача
* 2) Вызывает все, что есть в очереди мИкрозадач
* 3) Вызывает все, что есть в очереди вызовов
* */

/*      Вывод =>
*   1) Success (четвертая)
*   2) user received (Первая)
*   3) promise resolved (Шестая)
*   4) in promise (Третья)
*   5) last set timeout (Пятая)
*   6) End (вторая)
* */