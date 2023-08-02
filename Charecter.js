import {
  getDiceRollArray,
  getDicePlaceholderHtml,
  getPercentage,
} from "./utils.js";

//Charecter constructor function
export function Character(data) {
  Object.assign(this, data); // This method using for better codes with that way we eliminate 5 lines of our code. For instance, we get rid of below 5 lines of code

  this.maxHealth = this.health; //Using for percentage
  this.diceHtml = getDicePlaceholderHtml(this.diceCount);
  /*
    this.elementId = data.elementId;
    this.name = data.name;
    this.avatar = data.avatar;
    this.health = data.health;
    this.diceCount = data.diceCount;
  */
  this.setDiceHtml = () => {
    //Set Dice part of our html code according to our dice count
    this.currentDiceScore = getDiceRollArray(this.diceCount);
    this.diceHtml = this.currentDiceScore
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

  this.getHealthBarHtml = function () {
    //Get health bar our charecters do some caltulations using our getPercentage function
    const percent = getPercentage(this.health, this.maxHealth);

    return `<div class="health-bar-outer">
                <div class="health-bar-inner ${percent < 26 ? "danger" : ""}" 
                        style="width:${percent}%;">
                </div>
            </div>`;
  };

  //charecter render method inside constructor function
  this.getCharacterHtml = function () {
    const { name, avatar, health, diceHtml } = this;
    const healthBar = this.getHealthBarHtml();
    return `
        <div class="character-card">
            <h4 class="name"> ${name} </h4>
            <img class="avatar" src="${avatar}" />
            <div class="health">health: <b> ${health} </b></div>
            ${healthBar}
            <div class="dice-container">
                ${diceHtml}
            </div>
        </div>`;
  };
}
