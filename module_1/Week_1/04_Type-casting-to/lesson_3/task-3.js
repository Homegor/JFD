console.log(String(alert), Boolean(alert), Number(alert));
// Возвращает function alert() { [native code] } true NaN
console.log(String(console.log), Boolean(console.log), Number(console.log));
// Возвращает function log() { [native code] } true NaN
console.log(String({ name: 'Maxim' }), Boolean({ name: 'Maxim' }), Number({ name: 'Maxim' }));
// Возвращает [object Object] true NaN
console.log(String(Symbol('key')), Boolean('key'), Number('key') );
// Возвращает Symbol(key) true NaN
console.log(String(Number), Boolean(Number), Number(Number));
// Возвращает function Number() { [native code] } true NaN
console.log(String(''), Boolean(''), Number(''));
// Возвращает пустое значение false 0
console.log(String(0), Boolean(0), Number(0));
// Возвращает 0 false 0
console.log(String(-10), Boolean(-10), Number(-10));
// Возвращает -10 true -10
console.log(String('-105'), Boolean('-105'), Number('-105'));
// Возвращает -105 true -105