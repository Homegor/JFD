let ageOfPerson1 = 18;
let ageOfPerson2 = '20';

ageOfPerson2 = ageOfPerson1;

let nameOfAnimal1 = null;
let nameOfAnimal2 = 'Charlie';

nameOfAnimal2 = nameOfAnimal1;

const bestProgrammingLanguage1 = 'JavaScript';
const bestProgrammingLanguage2 = 'Java';

let initialValue1;
let initialValue2 = 0;

initialValue2 = initialValue1;

let isJavaScriptProgrammer1 = true;
let isJavaScriptProgrammer2 = false;

isJavaScriptProgrammer2 = isJavaScriptProgrammer1;

let helloText1 = 'Hello!';
let helloText2 = 'Привет!';

helloText2 = helloText1;

console.log(ageOfPerson2, typeof ageOfPerson2);
console.log(nameOfAnimal2, typeof nameOfAnimal2);
console.log('Переменную с const переопределить нельзя: \n', bestProgrammingLanguage1, typeof bestProgrammingLanguage1, '\n', bestProgrammingLanguage2, typeof bestProgrammingLanguage2)
console.log(initialValue2, typeof initialValue2)
console.log('var является устаревшим \n', isJavaScriptProgrammer2, typeof isJavaScriptProgrammer2)
console.log(helloText2, typeof helloText2)
