const javaScriptDescription = 'JavaScript — мультипарадигменный язык программирования. Поддерживает объектно-ориентированный, императивный и функциональный стили. Является реализацией спецификации ECMAScript. JavaScript обычно используется как встраиваемый язык для программного доступа к объектам приложений.'

const half = javaScriptDescription.length / 2
const changes = javaScriptDescription.slice(1, half)
const replacement = changes
    .replaceAll('a','A')
    .replaceAll('а','А')
    .replaceAll(' ','')

console.log(Math.floor(half))
console.log(replacement.repeat(3))


