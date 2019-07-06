import postal from 'postal/lib/postal.lodash'
import reduce from '../reducer'
import EventLog from '../eventLog'

class Counter extends HTMLElement {
    constructor() {
        super();

        this.eventLog = new EventLog();
        this.subscribe('app-msg-bus', 'app.increment.count');
        this.subscribe('app-msg-bus', 'app.decrement.count');
    }

    set count(count) {
        this.render(count);
    }

    subscribe(channel, topic) {
        return postal.subscribe({
            channel: channel,
            topic: topic,
            callback: (data, envelope) => {
                let state = reduce(this.eventLog.events);

                this.render(state.count);
            }
        });
    };

    render(count) {
        this.innerHTML = `
            Count:
            <p>${count}</p>
        `;
    }
}

customElements.define('counter-component', Counter);