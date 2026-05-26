import Pokemon from "./Pokemon.js";

/**
 * @class Pokemonok
 * @classdesc Több Pokémon (lista) együttes kezeléséért és megjelenítéséért felelős osztály.
 */
export default class Pokemonok {
  /**
   * @private
   * @type {Array<Object>}
   * @description A Pokémon objektumokat tartalmazó lista.
   */
  #lista = [];

  /**
   * @constructor
   * @param {Array<Object>} lista - Pokémon adatokat tartalmazó tömb.
   * @param {HTMLElement} szuloElem - Az a HTML elem, ahová a lista megjelenik.
   */
  constructor(lista, szuloElem) {
    this.#lista = lista;
    this.szuloElem = szuloElem;
    this.megjelenit();
  }

  /**
   * @method megjelenit
   * @description A Pokémon lista elemeinek példányosítása és megjelenítése.
   */
  megjelenit() {
    this.#lista.forEach((pokemon) => new Pokemon(pokemon, this.szuloElem));
  }
} //class
