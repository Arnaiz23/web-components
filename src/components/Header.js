class Header extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get Styles() {
    return /* css */`
      :host {
        
      }

      .nav {
            width: 100%;
            padding: 10px 20px;
            background-color: #fff;
        }
      
    `;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${Header.Styles}</style>
    <div class="nav">
        <h1>Este es el Header</h1>
    </div>`;
  }
}

customElements.define("my-header", Header);
