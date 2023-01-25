let myInfoText = 'Всем привет! Меня зовут ' + `${myName}` + '. Сейчас я изучаю язык программирования ' + `${programmingLanguage}` + ' на курсе по ' + `${programmingLanguage}` + ' у ' + `${courseCreatorName}` +'. Я хочу стать веб-разработчиком, потому что ' + `${reasonText}` + '. До этого я изучал(а) ' + `${programmingLanguage}` + ' ' + `${numberOfMonth}` + ' месяцев(а). Я уверен(а), что пройду данный курс до конца!'

myInfoText = myInfoText.replaceAll('JavaScript','javascript') // 1) Меняем JavaScript на javascript.
myInfoText = myInfoText.replaceAll('курс','КУРС') // 2) Меняем курс на КУРС.

// 3) Выводим результат
console.log(myInfoText)

// 4) Длинна строки
console.log(myInfoText.length)

// 5) Первый и последний символы строки
console.log('Первый: ',myInfoText[0], '\nПоследний: ', myInfoText.slice(-1))