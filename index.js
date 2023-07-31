import { characterData } from "./data.js";
import { Character } from "./Charecter.js";

const wizard = new Character(characterData.hero);
const orc = new Character(characterData.monster);

function render() {
  document.getElementById(wizard.elementId).innerHTML =
    wizard.getCharecterHtml();
  document.getElementById(orc.elementId).innerHTML = orc.getCharecterHtml();
}

render();
