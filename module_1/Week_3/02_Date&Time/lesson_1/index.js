const zero = function (o){
    if (o < 10){
        return '0' + o
    }else {
        return o
    }
}
function getDateFormat (separator = '-'){
    let dates = new Date()
    console.log(zero(dates.getDate()) + separator + zero(dates.getMonth() + 1) + separator + dates.getFullYear())
}
getDateFormat()

// Это очень странное решение задачи
