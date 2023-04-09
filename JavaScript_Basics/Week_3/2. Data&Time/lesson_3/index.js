function addDays(date, days) {
    return new Date(date.getTime() + days * 86400000);
}

console.log(addDays(new Date(), 2));