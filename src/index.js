import './web-components/buttons-component';
import './web-components/counter-component';
import EventLog from './eventLog';
import Storage from './storage'
import reduce from "./reducer";

window.addEventListener('load', () => {
    Storage.get().then( (events) => {
        let eventLog = new EventLog(events);

        let state = reduce(eventLog.events);

        const main = document.querySelector('main');

        const counterComponent = document.createElement('counter-component');
        counterComponent.count = state.count;

        main.appendChild(counterComponent);
        main.appendChild(document.createElement('counter-buttons'));
    });
});