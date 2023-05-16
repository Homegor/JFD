const getKiller = (suspectInfo, deadPeople) => {
  let killer = "";
  Object.entries(suspectInfo).forEach(([suspect, heWasSeen]) => {
    const hisKills = deadPeople.every((deadName) =>
      heWasSeen.includes(deadName)
    );
    if (hisKills) {
      killer = suspect;
    }
  });
  return killer;
};

console.log(
  getKiller(
    {
      James: ["Jacob", "Bill", "Lucas"],
      Johnny: ["David", "Kyle", "Lucas"],
      Peter: ["Lucy", "Kyle"],
    },
    ["Lucas", "Bill"]
  )
); // Убийца James

console.log(
  getKiller(
    {
      Brad: [],
      Megan: ["Ben", "Kevin"],
      Finn: [],
    },
    ["Ben"]
  )
); // Убийца Megan
