/**
 * @file index.js
 * @description Az alkalmazás belépési pontja, az osztályok
 * példányosításáért és az események összekötéséért felel.
 */

import Services from "./Services.js";
import Pokemon from "./Pokemon.js";
import Info from "./Info.js";

/**
 * @constant {HTMLElement}
 * @description A Pokémon megjelenítésére szolgáló konténer elem.
 */
const taroloElem = document.querySelector(".tarolo");

/**
 * @constant {HTMLElement}
 * @description A Pokémon fő adatainak konténere.
 */
const pokemonElem = document.querySelector(".pokemon");

/**
 * @constant {HTMLElement}
 * @description A Pokémon részletes információinak konténere.
 */
const infoElem = document.querySelector(".info");

/**
 * @type {Object}
 * @description Az aktuálisan kiválasztott Pokémon adatai.
 */
let obj = {};

/**
 * @type {Services}
 * @description Szolgáltatás az API-hívások kezelésére.
 */
const services = new Services();

/**
 * @description Pokémon adatainak lekérése külső API-ból.
 */
services.getAdat(
  "https://pokeapi.co/api/v2/pokemon-form/12",
  pokemonMegjelenit,
);

// services.getAdat(
//   "https://pokeapi.co/api/v2/pokemon-form/12",
//   infoMegjelenit,
// );

/**
 * @function pokemonMegjelenit
 * @param {Object} adat - A lekért Pokémon adatai.
 * @description Pokémon objektum létrehozása és megjelenítése.
 */
function pokemonMegjelenit(adat) {
  obj = adat;
  new Pokemon(adat, taroloElem);
}

// function infoMegjelenit(adat) {
//   obj = adat;
//   new Info(adat, infoElem);
// }

/**
 * @event pokemon
 * @description Egyedi esemény figyelése, amely egy Pokémonhoz
 * tartozó információkat továbbít.
 */
window.addEventListener("pokemon", (event) => {
  console.log([event.detail]);
  new Info(event.detail, infoElem);
});
