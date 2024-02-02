const MUGIWARAS = require("./char.js");

function sortByPowerLevel(arr) {
  return arr.toSorted((a, b) => a.powerLeverl - b.powerLeverl);
}

const sortedByPL = sortByPowerLevel(MUGIWARAS);
console.log(sortedByPL);

function sortByDevilFruit(arr) {}

function addToTheTeam(newMember, arr) {}
