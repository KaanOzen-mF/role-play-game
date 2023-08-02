const getDiceRollArray = (diceCount) => {
  //Dices part of game fill with random number according to dice count
  return new Array(diceCount).fill(0).map(() => {
    //Using array deconstructor create array according to dice count length
    return Math.floor(Math.random() * 6) + 1; //Random number for filling dice
  });
};

const getPercentage = (remainingHealth, maximumHealth) => {
  //Calculate percentage of our wizard and monster health bar
  return (100 * remainingHealth) / maximumHealth;
};

const getDicePlaceholderHtml = (diceCount) => {
  //Firstly we fill our dice placeholder html 0 with this way placeholder html work what we expect
  return new Array(diceCount)
    .fill(0)
    .map(() => {
      return `<div class="placeholder-dice"></div>`;
    })
    .join("");
};

export { getDiceRollArray, getDicePlaceholderHtml, getPercentage };
