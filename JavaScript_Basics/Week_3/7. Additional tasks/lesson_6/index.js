const peopleWithVisa = [
  {
    firstName: "Stasia",
    lastName: "Ward",
    criminalRecord: true,
    passportExpiration: "19.06.2040",
  },
  {
    firstName: "Elliot",
    lastName: "Baker",
    criminalRecord: false,
    passportExpiration: "04.06.2041",
  },
  {
    firstName: "Leighann",
    lastName: "Scott",
    criminalRecord: true,
    passportExpiration: "31.07.2039",
  },
  {
    firstName: "Nick",
    lastName: "Pop",
    criminalRecord: false,
    passportExpiration: "31.12.2010",
  },
];

function allowVisa(people) {
  return people.filter((user) => {
    //console.log(user);
    const splittedDate = user.passportExpiration.split(".");
    //console.log(splittedDate);
    const day = splittedDate[0];
    //console.log(day);
    const month = splittedDate[1];
    //console.log(month);
    const year = splittedDate.at(-1);
    //console.log(year);
    const passport = new Date(year, day, month - 1);
    //console.log(passport);
    return passport.getTime() > Date.now() && !user.criminalRecord;
  });
}

const result = allowVisa(peopleWithVisa);
console.log("result", result);
