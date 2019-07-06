import EventLog from '../eventLog';

class ButtonsComponent extends HTMLElement {
    constructor() {
        super();

        this.eventLog = new EventLog();
    }

    connectedCallback() {
        this.innerHTML = `
            <button class="increase">Increase</button>
            <button class="decrease">Decrease</button>
        `;

        this.querySelector('button.increase').addEventListener('click', event => {
            this.onIncreaseButtonClick(event);
        });

        this.querySelector('button.decrease').addEventListener('click', event => {
            this.onDecreaseButtonClick(event);
        });
    }

    onIncreaseButtonClick(event) {
        this.eventLog.add(this.eventLog.events, [{
            channel: 'app-msg-bus',
            topic: 'app.increment.count'
        }]);
    }

    onDecreaseButtonClick(event) {
        this.eventLog.add(this.eventLog.events, [{
            channel: 'app-msg-bus',
            topic: 'app.decrement.count'
        }]);
    }
}

customElements.define('counter-buttons', ButtonsComponent);