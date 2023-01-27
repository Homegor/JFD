// for
for (let y = 0; y < 3; y += 1) {
    let newStudent = prompt('Введите имя нового студента!');
    if (newStudent) {
        newStudent = newStudent.trim();
        alert(`Добро пожаловать, ${newStudent}!`)
    }
}
// while
let h = 0
while (h < 3){
    let newStudent = prompt('Введите имя нового студента!');
    newStudent = newStudent.trim()
    h++
    alert(`Добро пожаловать, ${newStudent}!`)
}
// do while
let i = 0
do {
    let newStudent = prompt('Введите имя нового студента!');
    newStudent = newStudent.trim()
    i++
    alert(`Добро пожаловать, ${newStudent}!`)
}while (i < 3)
