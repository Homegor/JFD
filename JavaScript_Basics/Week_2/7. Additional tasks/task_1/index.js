const checkQuestionAnswer = (question, correctAnswer) =>{
    alert(question)
    let isAnswer = prompt()
        isAnswer = isAnswer.trim().toLowerCase()
    console.log(isAnswer)
    if (isAnswer === correctAnswer.toLowerCase()){
        alert('Верно')
    }else {
        alert(`Не верно. \n Верный ответ: ${correctAnswer}`)
    }

}

checkQuestionAnswer('Арбуз это фрукт или ягода?', 'Ягода');
checkQuestionAnswer('Сколько в среднем зубов у взрослого человека?', '32');
checkQuestionAnswer('Как называется самая маленькая птица в мире?', 'Колибри');