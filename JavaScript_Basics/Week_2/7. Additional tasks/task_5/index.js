const arr = []

for (let i = 0; i < 3; i++){
    const newArray = []
    for (let x = 0; x < 5; x++){
        newArray.push(x + 1)
    }
    arr.push(newArray)
}

console.log(arr)
