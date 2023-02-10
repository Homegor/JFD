const ordersArr = [4, 2, 1, 3];
const people = [
    { id: 1, name: "Максим" },
    { id: 2, name: "Николай" },
    { id: 3, name: "Ангелина" },
    { id: 4, name: "Виталий" },
];
function giveTalonsInOrder(patients, orders){
const obj = {}
patients.forEach((index, name) =>
    obj[index.id] = name)
return orders.map(id => patients[obj[id]])
}
const result = giveTalonsInOrder(people, ordersArr);
console.log('result', result);