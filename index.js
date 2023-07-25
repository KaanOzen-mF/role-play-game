/*
Challenge: 
1. Take the hard-coded HTML for the Wizard card, bring it 
   into index.js and then inject it back into its div with 
   JavaScript.
2. Do the same for Orc card. 
*/
const hero = {
  id: "hero",
  name: "Wizard",
  avatar: "images/wizard.png",
  health: 60,
  diceRoll: 6,
};

const monster = {
  id: "monster",
  name: "Orc",
  avatar: "images/orc.png",
  health: 10,
  diceRoll: 4,
};

function renderCharecter(data) {
  document.getElementById(data.id).innerHTML = `
   <div class="character-card">
     <h4 class="name"> ${data.name} </h4>
     <img class="avatar" src="${data.avatar}"/>
     <p class="health">health: <b> ${data.health} </b></p>
     <div class="dice-container">
       <div class="dice"> ${data.diceRoll} </div>
     </div>
   </div>   
 `;
}
console.log(renderCharecter(hero));

renderCharecter(hero);
renderCharecter(monster);

/*
document.getElementById("hero").innerHTML = `
<div class="character-card">
   <h4 class="name"> ${hero.name} </h4>
   <img class="avatar" src="${hero.avatar}"/>
   <p class="health">health: <b> ${hero.health} </b></p>
   <div class="dice-container">
      <div class="dice"> ${hero.diceRoll} </div>
   </div>
</div>   
`;
document.getElementById("monster").innerHTML = `
<div class="character-card">
   <h4 class="name"> ${monster.name} </h4>
   <img class="avatar" src="${monster.avatar}"/>
   <p class="health">health: <b>l ${monster.health} </b></p>
   <div class="dice-container">
      <div class="dice"> ${monster.diceRoll} </div>
   </div>
</div>
`;

*/
