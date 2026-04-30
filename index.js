import Services from "./Services.js";
import Pokemon from "./Pokemon.js";
import Info from "./Info.js";

const taroloElem = document.querySelector(".tarolo");
const pokemonElem = document.querySelector(".pokemon");
const infoElem = document.querySelector(".info");

let obj = {};

const services = new Services();

services.getAdat(
  "https://pokeapi.co/api/v2/pokemon-form/12",
  pokemonMegjelenit,
);

// services.getAdat(
//   "https://pokeapi.co/api/v2/pokemon-form/12",
//   infoMegjelenit,
// );

function pokemonMegjelenit(adat) {
  obj = adat;
  new Pokemon(adat, taroloElem);
}

// function infoMegjelenit(adat) {
//   obj = adat;
//   new Info(adat, infoElem);
// }


window.addEventListener("pokemon",  (event) => {
  console.log([event.detail]);
  new Info(event.detail, infoElem);
});
