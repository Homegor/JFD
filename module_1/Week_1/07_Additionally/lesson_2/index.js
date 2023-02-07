const clientName = 'Игорь'
let clientSpentForAllTime = 110// $
let clientSpentToday = 25 // $
let discount

if (clientSpentForAllTime >= 100 && clientSpentForAllTime < 300){
    discount = 10
}else if (clientSpentForAllTime >= 300 && clientSpentForAllTime < 500) {
    discount = 20
}else if (clientSpentForAllTime >= 500){
    discount = 30
}

console.log(`Вам предоставляется скидка в ${discount}%!`)

clientSpentForAllTime = clientSpentForAllTime + clientSpentToday
p = Math.floor((discount / 100)* clientSpentToday)
clientSpentToday = clientSpentToday-p

console.log(`Спасибо, ${clientName}! К оплате ${clientSpentToday}$. За все время в нашем ресторане вы потратили ${clientSpentForAllTime}$.`)
