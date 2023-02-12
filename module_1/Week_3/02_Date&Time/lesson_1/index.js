const zero = function (num){
    if (num < 10){
        return '0' + num
    }else {
        return num
    }
}
function getDateFormat (separator = '-'){
    let dates = new Date()
    console.log(zero(dates.getDate()) + separator + zero(dates.getMonth() + 1) + separator + dates.getFullYear())
}
getDateFormat()

// Это очень странное решение задачи
