/**
 * @class Info
 * @classdesc Egy Pokémon részletes információinak (pl. típusok)
 * megjelenítéséért felelős osztály.
 */
export default class Info {
  /**
   * @private
   * @type {Object}
   * @description A Pokémon adatait tartalmazó objektum.
   */
  #obj = {};

  /**
   * @constructor
   * @param {Object} obj - A Pokémon részletes adatai.
   * @param {HTMLElement} szuloElem - Az a HTML elem, ahová az információk megjelennek.
   */
  constructor(obj, szuloElem) {
    this.#obj = obj;
    this.szuloElem = szuloElem;
    this.infoMegjelenit();
  }

  /**
   * @method infoMegjelenit
   * @description A Pokémon típusainak és egyéb információinak megjelenítése.
   */
  infoMegjelenit() {
    let k = `<div class="info">
                <p>Rend: ${this.#obj.types[0].type.name}<p>
                <p>Típusa: ${this.#obj.types[1].type.name}<p>
            </div>`;
    this.szuloElem.insertAdjacentHTML("beforeend", k);
  }
} //class
