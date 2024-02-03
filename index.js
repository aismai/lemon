const MUGIWARAS = require("./char.js");

function sortByPowerLevel(arr) {
    return arr.sort(function (a, b) {
        return a.powerLeverl - b.powerLeverl
    })
}
console.log(sortByPowerLevel(MUGIWARAS));

function sortByDevilFruit(arr) {
    return arr.sort(function (a,b) {
        return a.hasDevilFruitPowers - b.hasDevilFruitPowers
    })
    .map(function (elem) {
        if(elem.hasDevilFruitPowers == true) {
            console.log("Персонаж ел DevilFruit")
        }
        else {
            console.log("Персонаж не ел DevilFruit")
        }
    })
}
sortByDevilFruit(MUGIWARAS);

function addToTheTeam(newMember, arr) {

    newMember = {hasDevilFruitPower: Boolean(), powerLeverl: Number(),}
    arr.push(newMember)
    return arr
}
let newTeamMate = addToTheTeam("black beard", MUGIWARAS)
console.log(newTeamMate)
