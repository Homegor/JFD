function getDaysBeforeBirthday(nextBirthdayDate){
    const date = new Date()
    nextBirthdayDate = new Date('1.30.2024')
    return nextBirthdayDate.getTime() - date.getTime()
}
function convertMsToDays(){
    return getDaysBeforeBirthday() / 1000 / 60 / 60 / 24
}
console.log(Math.round(convertMsToDays() + 1))