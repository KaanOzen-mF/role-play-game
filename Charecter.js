import { getDiceRollArray, getDicePlaceholderHtml } from "./utils.js";

//Charecter constructor function
export function Character(data) {
  Object.assign(this, data); // This method using for better codes with that way we eliminate 5 lines of our code. For instance, we get rid of below 5 lines of code

  this.diceArray = getDicePlaceholderHtml(this.diceCount);
  /*
    this.elementId = data.elementId;
    this.name = data.name;
    this.avatar = data.avatar;
    this.health = data.health;
    this.diceCount = data.diceCount;
    */

  this.getDiceHtml = () => {
    this.currentDiceScore = getDiceRollArray(this.diceCount);
    this.diceArray = this.currentDiceScore
      .map((num) => {
        return `<div class="dice">${num}</div>`;
      })
      .join("");
  };

  this.takeDamage = (attackScoreArray) => {
    const totalAttackScore = attackScoreArray.reduce((totalVal, currentVal) => {
      return totalVal + currentVal;
    });
    this.health -= totalAttackScore;
    if (this.health <= 0) {
      this.dead = true;
      this.health = 0;
    }
  };
  //charecter render method inside constructor function
  this.getCharecterHtml = () => {
    const { elementId, name, avatar, health, diceCount } = data; //Object deconstruction for clean code

    return `<div class="character-card">
            <h4 class="name"> ${this.name} </h4>
            <img class="avatar" src="${this.avatar}" />
            <div class="health">health: <b> ${this.health} </b></div>
            <div class="dice-container">    
                ${this.diceArray}
            </div>
        </div>`;
  };
}
