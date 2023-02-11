function addDays(date, days) {
    return new Date(date.getTime() + days * 5000);
}

console.log(addDays(new Date(), 2));