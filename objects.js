let player = {
  age: 27,
  name: "Zac",
  game: "Remnant from the Ashes",
};

player.isActive = false;
player.health = 100;

// delete player.health //deletes "health: 100" from object

console.log(player);
console.log(player.name);
// console.log(player["name"]);

let group = {
  playerOne: {
    age: 27,
    name: "CplKamikaze",
    character: "Nancy Wheeler",
  },
  playerTwo: {
    age: 27,
    name: "UNNOWN-PLAYER",
    character: "Yui Kimura",
  },
  playerThree: {
    age: 38,
    name: "PrettyGoodFeng",
    character: "Feng Min",
  },
  playerFour: {
    age: 26,
    name: "Troontoon",
    character: "Felix Richter",
  },
};

console.log(group);
console.log(group.playerOne);
console.log(group.playerThree.name);
console.log(group.playerFour.age);
console.log(group.playerTwo.character);
