class Card extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    console.log(this.getAttribute("img"));
  }

  static get Styles() {
    return /* css */`
      .card {
          width: 300px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
          background-color: #aaa;
          border-radius: 10px;
          overflow: hidden;
          transition: transform .5s;
      }
      .card img {
          aspect-ratio: 4/3;
          width: 100%;
      }

      .card:hover {
          transform: scale(1.1);
      }
    `;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${Card.Styles}</style>
    <div class="card">
        <header><img src="${this.getAttribute("img")}" alt="zapatillas"/></header>
        <section>
            <h2>${this.getAttribute("title")}</h2>
            <p>Precio: ${this.getAttribute("price")}€</p>
        <section>
    </div>`;
  }
}

customElements.define("my-card", Card);
