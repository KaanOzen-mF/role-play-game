import { characterData } from "./data.js";
import { Character } from "./Charecter.js";

function attack() {
  wizard.getDiceHtml();
  orc.getDiceHtml();
  wizard.takeDamage(orc.currentDiceScore);
  orc.takeDamage(wizard.currentDiceScore);
  render();
  if (wizard.dead || orc.dead) {
    endGame();
  }
}

function endGame() {
  const endMessage =
    wizard.health === 0 && orc.health === 0
      ? "No victors - all creatures are dead"
      : wizard.health > 0
      ? "The Wizard Wins"
      : "The Orc is Victorious";

  const endEmoji =
    wizard.health === 0 && orc.health === 0
      ? "☠️"
      : wizard.health > 0
      ? "🔮"
      : "☠️";

  document.body.innerHTML = `
    <div class="end-game">
        <h2>Game Over</h2>
        <h3> ${endMessage} 
        <p class="end-emoji"> ${endEmoji} </p>
    </div>
    `;
}

const wizard = new Character(characterData.hero);
const orc = new Character(characterData.monster);

function render() {
  document.getElementById(wizard.elementId).innerHTML =
    wizard.getCharecterHtml();
  document.getElementById(orc.elementId).innerHTML = orc.getCharecterHtml();
}

document.getElementById("attack-button").addEventListener("click", attack);
render();
