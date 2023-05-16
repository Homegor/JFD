const hero = {
  name: "Hero player",
  health: 100,
  heatEnemy: (enemy) => (enemy.health -= 10),
};
const enemy = {
  name: "Enemy player",
  health: 100,
  heatEnemy: (hero) => (hero.health -= 10),
};

function getRandomNumberInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const startGame = (heroPlayer, enemyPlayer) => {
  console.log(heroPlayer);
  console.log(enemyPlayer);

  while (heroPlayer.health > 0 && enemyPlayer.health > 0) {
    const damage = getRandomNumberInRange(0, 1);
    if (damage === 1) {
      heroPlayer.heatEnemy(enemyPlayer);
    } else {
      enemyPlayer.heatEnemy(heroPlayer);
    }
  }

  if (heroPlayer.health === 0) {
    console.log(
      `${enemyPlayer.name} победил! У него осталось ${enemyPlayer.health} здоровья`
    );
  } else {
    console.log(
      `${heroPlayer.name} победил! У него осталось ${heroPlayer.health} здоровья`
    );
  }
};

startGame(hero, enemy);
