const goals = [8, 1, 1, 3, 2, -1, 5];

let maxGoalIsMatch = goals[0]
let minGoalIsMatch = goals[0]
let matchIndex = 0

let maxGoalsForSeason
let gamesPlayedForSeason = goals.length

const getMatchMaxAndMinGoal = () =>{
    goals.forEach((numberOfGoals , number ) => {
        if(numberOfGoals > maxGoalIsMatch){
            maxGoalIsMatch = numberOfGoals
            matchIndex = number
        }if(numberOfGoals < minGoalIsMatch && numberOfGoals >= 0){
            minGoalIsMatch = numberOfGoals
        }
    })
    console.log(`Самый результативный матч был под номером ${matchIndex + 1}. В нем было забито ${maxGoalIsMatch} гол(ов).`)
}
const getMatchMinGoal = () =>{
    const matchMinGoal = goals
        .map((item, index) =>
            item === minGoalIsMatch ? index + 1 : -1
        ).filter((item) => item > 0).join(", ");

    console.log(`Самые не результативные матчи были под номерами ${matchMinGoal}. В каждом из них было забито ${minGoalIsMatch} мяча(у).`)
}
const  getGoalsPerSeason = () =>{
    const numberOfGoals = goals.reduce((goal, numberMatch) => {
        if (numberMatch >= 0){
            numberMatch += goal
            maxGoalsForSeason = numberMatch
            return numberMatch
        }else {
            return goal
        }
    }, 0)
    console.log(`Общее количество голов за сезон равно ${numberOfGoals}`)
}
const getAutomaticDefeats = () =>{
    const automaticDefeat = goals.some((goal) => goal < 0)
        if (automaticDefeat){
                console.log('Были автоматические поражения: Да')
            }else {
                console.log('Были автоматические поражения: нет')
            }
}
const  averageNumberOfGoalsPerMatch = () =>{
    const numberOfGoals = maxGoalsForSeason / gamesPlayedForSeason
    console.log(`Среднее количество голов за сезон равно ${numberOfGoals}`)
}
const sortMatch = () => {
    console.log('Отсортируйте голы в порядке возрастания: ' , goals.sort().join(', '))
}
function runAllTasks (){
    getMatchMaxAndMinGoal()
    getMatchMinGoal()
    getGoalsPerSeason()
    getAutomaticDefeats()
    averageNumberOfGoalsPerMatch()
    sortMatch()
}
runAllTasks()