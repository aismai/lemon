const MUGIWARAS = require("./char.js");

function sortByPowerLevel(arr) {
  return arr.toSorted((a, b) => a.powerLeverl - b.powerLeverl);
}

const sortedByPL = sortByPowerLevel(MUGIWARAS);
// console.log(sortedByPL);

function sortByDevilFruit(arr) {
  return arr.toSorted((a, b) => {
    return a.hasDevilFruitPowers - b.hasDevilFruitPowers;
  });
}

const sortedByDF = sortByDevilFruit(MUGIWARAS);
console.log(sortedByDF);

const usopp = {
  hasDevilFruitPowers: false,
  powerLeverl: 20,
};

const brook = {
  hasDevilFruitPowers: true,
  powerLeverl: 30,
};

const tonytonychoppa = {
  hasDevilFruitPowers: true,
  powerLeverl: 50,
};

const yamato = {
  hasDevilFruitPowers: true,
  powerLeverl: 95,
};

const franky = {
  hasDevilFruitPowers: null,
  powerLeverl: null,
};

const jinbe = {
  hasDevilFruitPowers: null,
  powerLeverl: null,
};

const nefertarivivi = {
  hasDevilFruitPowers: null,
  powerLeverl: null,
};

const newMembers = [usopp, brook, tonytonychoppa, yamato];

function addToTheTeam(newMember, arr) {
  arr.push(newMember);
}
// addToTheTeam(usopp, MUGIWARAS);
// addToTheTeam(brook, MUGIWARAS);
// addToTheTeam(tonytonychoppa, MUGIWARAS);
// addToTheTeam(yamato, MUGIWARAS);
// console.log(MUGIWARAS);
