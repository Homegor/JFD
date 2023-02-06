function getSumOfSequence(number){
    const arr = []
    for (let i = 1; i <= number; i++){
        arr.push(i)
        console.log(arr)
    }return arr[0] + arr[arr.length-1]
}
console.log(getSumOfSequence(3))

