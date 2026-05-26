/**
 * @class Pokemon
 * @classdesc Egyetlen Pokémon adatainak megjelenítéséért és eseményeinek kezeléséért felelős osztály.
 */
export default class Pokemon {
  /**
   * @private
   * @type {Object}
   * @description A Pokémon adatait tartalmazó objektum.
   */
  #obj = {};

  /**
   * @constructor
   * @param {Object} obj - A Pokémon adatai (pl. név, egyéb tulajdonságok).
   * @param {HTMLElement} szuloElem - Az a HTML elem, ahová a Pokémon megjelenik.
   */

  constructor(obj, szuloElem) {
    this.#obj = obj;
    this.szuloElem = szuloElem;
    this.megjelenit();
    this.esemenykezelo();
  }

  /**
   * @method megjelenit
   * @description A Pokémon adatainak megjelenítése a felületen.
   */
  megjelenit() {
    let k = `
            <h1>${this.#obj.name}</h1>
            <div class="pokemon">
                <img src="${this.#obj.sprites.front_default}" alt="${this.#obj.name} title="${this.#obj.name}">
            </div>`;
    this.szuloElem.insertAdjacentHTML("beforeend", k);
  }

  /**
   * @method esemenykezelo
   * @description A Pokémonhoz tartozó események (pl. kattintás) kezelése.
   */
  esemenykezelo() {
    const elem = document.querySelector(".pokemon img");
    elem.addEventListener("click", () => {
      this.sajatEsemeny();
    });
  }

  /**
   * @method sajatesemeny
   * @description Saját (custom) esemény létrehozása és kiváltása,
   * amelyen keresztül a Pokémon objektum más komponensekkel kommunikál.
   */
  sajatEsemeny() {
    const e = new CustomEvent("pokemon", { detail: this.#obj });
    window.dispatchEvent(e);
  }
} //class
