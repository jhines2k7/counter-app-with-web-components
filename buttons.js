class Buttons extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <button id="increase">Increase</button>
            <button id="decrease">Decrease</button>
        `;
    }
}

customElements.define('counter-buttons', Buttons);