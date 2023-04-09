const peopleWaiting = ['Кристина', 'Олег', 'Кирилл', 'Мария', 'Светлана', 'Артем', 'Глеб'];

function giveParcel(received){
    const client = received.shift()
    console.log(client + ' Получил(a) посылку.' + ' В очереди осталось ' + received.length + ' человек')
}
function leaveQueueWithoutParcel(notReceived){
    const gone = notReceived.pop()
    console.log(gone + ' не получил(а) посылку и ушел(ла) из очереди')
}

giveParcel(peopleWaiting) // Минус Кристина
giveParcel(peopleWaiting) // Минус Олег
giveParcel(peopleWaiting) // Минус Кирилл

leaveQueueWithoutParcel(peopleWaiting) // Не получил и ушел Глеб
leaveQueueWithoutParcel(peopleWaiting) // Не получил и ушел Артем
leaveQueueWithoutParcel(peopleWaiting) // Не получил и ушел Светлана
leaveQueueWithoutParcel(peopleWaiting) // Не получил и ушел Мария