const showSuccessMessage = (message) => {
    console.log(message)
}
const showErrorMessage = (message) => {
    console.error(message)
}
const checkTextOnErrorSymbol = (text, errorSymbol, successCallback, errorCallback) => {
    let notError = false
    for (let i = 0; i < text.length; i += 1){
        const indexError = text[i]
        if(indexError === errorSymbol){
            notError = true
            errorCallback(`Найден запрещенный символ ${errorSymbol} "под индексом ${i}”`)
        }
    }if(notError === false){
        successCallback(`В данном тексте нет запрещенных символов ${errorSymbol}`)
    }
}

const text = 'Привет! Как дела! Давно мы с тобой не виделись.';
checkTextOnErrorSymbol(text, 'а', showSuccessMessage, showErrorMessage)
checkTextOnErrorSymbol(text, 'л', showSuccessMessage, showErrorMessage)
checkTextOnErrorSymbol(text, 'ъ', showSuccessMessage, showErrorMessage)
checkTextOnErrorSymbol(text, '!', showSuccessMessage, showErrorMessage)