export default class Info {
  #obj = {};
  constructor(obj, szuloElem) {
    this.#obj = obj;
    this.szuloElem = szuloElem;
    this.infoMegjelenit();
  }

  infoMegjelenit() {
    let k = `<div class="info">
                <p>${this.#obj.types[0].type.name}<p>
                <p>${this.#obj.types[1].type.name}<p>
            </div>`;
    this.szuloElem.insertAdjacentHTML("beforeend", k);
  }
} //class
