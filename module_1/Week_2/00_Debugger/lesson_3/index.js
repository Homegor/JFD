const salaryOfJuniorDeveloper = 500;
const numberOfJuniorDevelopers = 3;
let taxPercentage = 13;
let totalJuniorDevelopersSalary;

for (let i = 0; i < numberOfJuniorDevelopers; i += 1) {
    debugger
    let salaryWithTax = (salaryOfJuniorDeveloper-(salaryOfJuniorDeveloper*taxPercentage/100));
    debugger
    // totalJuniorDevelopersSalary += salaryWithTax;
    totalJuniorDevelopersSalary = 1 + salaryWithTax; // Ошибка тут нехватает значения (не понимаю какое значение надо подставить, предположим что 1)
    debugger
}
console.log('totalJuniorDevelopersSalary', totalJuniorDevelopersSalary);