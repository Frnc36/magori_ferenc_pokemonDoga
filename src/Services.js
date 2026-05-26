/**
 * @class Services
 * @classdesc Külső adatforrásból (API) történő adatkérésért felelős szolgáltató osztály.
 */
export default class Services {
  /**
   * @constructor
   * @description Services osztály példányosítása.
   *
   */
  constructor() {}

  /**
   * @method getAdat
   * @param {string} vegpont - Az API végpont URL-je.
   * @param {Function} callback - Az adatok feldolgozására szolgáló visszahívó függvény.
   * @description Adatok lekérése fetch segítségével, majd átadása callbacknek.
   */
  getAdat(vegpont, callback) {
    fetch(vegpont)
      .then((response) => response.json())
      .then((adat) => {
        console.log(adat);
        callback(adat);
      })
      .catch((error) => console.log(error));
  }
} //class
