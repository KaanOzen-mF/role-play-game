export function getDiceRollArray(diceCount) {
  //Dices part of game fill with random number according to dice count
  return new Array(diceCount).fill(0).map(() => {
    //Using array deconstructor create array according to dice count length
    return Math.floor(Math.random() * 6) + 1; //Random number for filling dice
  });
}
