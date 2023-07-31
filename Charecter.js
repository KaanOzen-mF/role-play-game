import { getDiceRollArray } from "./utils.js";

//Charecter constructor function
export function Character(data) {
  Object.assign(this, data); // This method using for better codes with that way we eliminate 5 lines of our code. For instance, we get rid of below 5 lines of code

  /*
    this.elementId = data.elementId;
    this.name = data.name;
    this.avatar = data.avatar;
    this.health = data.health;
    this.diceCount = data.diceCount;
    */

  this.getDiceHtml = function (diceCount) {
    //Using this method create dice element
    return getDiceRollArray(diceCount)
      .map(function (num) {
        return `<div class="dice">${num}</div>`;
      })
      .join("");
  };

  //charecter render method inside constructor function
  this.getCharecterHtml = function () {
    const { elementId, name, avatar, health, diceCount } = data; //Object deconstruction for clean code
    const diceHtml = this.getDiceHtml(diceCount);

    return `<div class="character-card">
            <h4 class="name"> ${name} </h4>
            <img class="avatar" src="${avatar}" />
            <div class="health">health: <b> ${health} </b></div>
            <div class="dice-container">    
                ${diceHtml}
            </div>
        </div>`;
  };
}
