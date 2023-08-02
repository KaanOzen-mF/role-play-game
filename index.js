import { characterData } from "./data.js";
import { Character } from "./Charecter.js";

let monstersArray = ["orc", "demon", "goblin"];
let isWaiting = false;

function getNewMonster() {
  const nextMonsterData = characterData[monstersArray.shift()]; //First we select our first monster inside monstersArray using ".shift" method
  return nextMonsterData ? new Character(nextMonsterData) : {}; //Our Monster data is empty return empty object unless we pick next monster again using ".shift" method
}

function attack() {
  if (!isWaiting) {
    wizard.setDiceHtml();
    monster.setDiceHtml();
    wizard.takeDamage(monster.currentDiceScore);
    monster.takeDamage(wizard.currentDiceScore);
    render();

    if (wizard.dead) {
      endGame();
    } else if (monster.dead) {
      isWaiting = true;
      document.getElementById("attack-button").classList.add("disabled");
      if (monstersArray.length > 0) {
        setTimeout(() => {
          monster = getNewMonster();
          render();
          isWaiting = false;
          document.getElementById("attack-button").classList.remove("disabled");
        }, 1500);
      } else {
        endGame();
      }
    }
  }
}

function endGame() {
  isWaiting = true;
  const endMessage =
    wizard.health === 0 && monster.health === 0
      ? "No victors - all creatures are dead"
      : wizard.health > 0
      ? "The Wizard Wins"
      : "The monsters are Victorious";

  const endEmoji = wizard.health > 0 ? "🔮" : "☠️";
  setTimeout(() => {
    document.body.innerHTML = `
              <div class="end-game">
                  <h2>Game Over</h2> 
                  <h3>${endMessage}</h3>
                  <p class="end-emoji">${endEmoji}</p>
              </div>
              `;
  }, 1500);
}

document.getElementById("attack-button").addEventListener("click", attack);

function render() {
  document.getElementById("hero").innerHTML = wizard.getCharacterHtml();
  document.getElementById("monster").innerHTML = monster.getCharacterHtml();
}

const wizard = new Character(characterData.hero);
let monster = getNewMonster();
render();
