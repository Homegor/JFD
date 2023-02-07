let clientName = prompt('Введите имя клиента')
let clientSpentForAllTime = Number(prompt('Сколько клиент потратил сегодня?'))// $
let clientSpentToday = Number(prompt('Сколько клиент потратил за все время?')) // $
let discount

if (clientSpentForAllTime >= 100 && clientSpentForAllTime < 300){
    discount = 10
}else if (clientSpentForAllTime >= 300 && clientSpentForAllTime < 500) {
    discount = 20
}else if (clientSpentForAllTime >= 500){
    discount = 30
}

alert(`Вам предоставляется скидка в ${discount}%!`)

clientSpentForAllTime = clientSpentForAllTime + clientSpentToday
p = Math.floor((discount / 100)* clientSpentToday)
clientSpentToday = clientSpentToday-p

alert(`Спасибо, ${clientName}! К оплате ${clientSpentToday}$. За все время в нашем ресторане вы потратили ${clientSpentForAllTime}$.`)