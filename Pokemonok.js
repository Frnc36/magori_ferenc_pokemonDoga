import Pokemon from "./Pokemon.js";

export default class Pokemonok {
  #lista = [];
  constructor(lista, szuloElem) {
    this.#lista = lista;
    this.szuloElem = szuloElem;
    this.megjelenit();
  }

  megjelenit() {
    this.#lista.forEach((pokemon) => new Pokemon(pokemon, this.szuloElem));
  }
} //class
