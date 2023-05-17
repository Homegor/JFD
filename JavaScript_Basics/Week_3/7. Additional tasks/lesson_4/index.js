const todaysWinner = {
  prize: "10 000$",
};

const winnerApplicants = {
  "001": {
    name: "Максим",
    age: 25,
  },
  201: {
    name: "Светлана",
    age: 20,
  },
  304: {
    name: "Екатерина",
    age: 35,
  },
};

function getRandomNumberInRange(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const getWinner = (applicants, winnerObject) => {
  const ticketNumber = Object.keys(winnerApplicants);
  const ticketWin = getRandomNumberInRange(0, ticketNumber.length);
  const ticketWinPerson = ticketNumber[ticketWin];
  const winNamePerson = applicants[ticketWinPerson];

  return {
    ...winnerObject,
    ...winNamePerson,
  };
};

const resultWinner = getWinner(winnerApplicants, todaysWinner);
console.log("resultWinner", resultWinner);
// { prize: '10 000$', name: 'Максим', age: 25 }
