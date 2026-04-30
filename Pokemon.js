export default class Pokemon {
  #obj = {};
  constructor(obj, szuloElem) {
    this.#obj = obj;
    this.szuloElem = szuloElem;
    this.megjelenit();
    this.esemenykezelo();
  }

  megjelenit() {
    let k = `
            <h1>${this.#obj.name}</h1>
            <div class="pokemon">
                <img src="${this.#obj.sprites.front_default}" alt="${this.#obj.name} title="${this.#obj.name}">
            </div>`;
    this.szuloElem.insertAdjacentHTML("beforeend", k);
  }

  esemenykezelo() {
    const elem = document.querySelector(".pokemon img");
    elem.addEventListener("click", () => {
      this.sajatEsemeny();
    });
  }

  sajatEsemeny() {
    const e = new CustomEvent("pokemon",{detail:this.#obj});
    window.dispatchEvent(e);
  }
} //class
