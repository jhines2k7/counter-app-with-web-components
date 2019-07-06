class Counter extends HTMLElement {
    constructor() {
        super();
    }

    set count(count) {
        this.innerHTML = `
            Count:
            <p>${count}</p>
        `;
    }
}

customElements.define('counter-component', Counter);