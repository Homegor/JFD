let student = {
    stack: ['HTML'],
    level: 1,
    improveLevel(){
        const allStack = ['HTML', 'CSS', 'JavaScript', 'React', 'NodeJS']
        if(this.level <= 5){
            this.stack.push(allStack[this.level++])
        }return this
    }
}
console.log(student.improveLevel())
console.log(student.improveLevel())
console.log(student.improveLevel())
console.log(student.improveLevel())