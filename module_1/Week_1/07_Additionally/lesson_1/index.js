const javaScriptDescription = 'JavaScript — мультипарадигменный язык программирования. Поддерживает объектно-ориентированный, императивный и функциональный стили. Является реализацией спецификации ECMAScript. JavaScript обычно используется как встраиваемый язык для программного доступа к объектам приложений.'

const half = ((javaScriptDescription.length - 1) / 2)
const changes = javaScriptDescription.slice(0, half)
let replacement = changes
    .replaceAll('a','A')
    .replaceAll('а','А')
    .replaceAll(' ','')
    .repeat(3)

let num = Math.floor((replacement.length - 1) / 2)

console.log(replacement[num])
console.log(replacement)



