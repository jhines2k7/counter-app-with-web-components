import './web-components/buttons-component';
import './web-components/counter-component';
import EventLog from './eventLog';
import Storage from './storage'

let eventLog;

window.addEventListener('load', () => {
    Storage.get().then( (events) => {
        eventLog = new EventLog(events);
    });

    const main = document.querySelector('main');

    const counterComponent = document.createElement('counter-component');
    counterComponent.count = 0;

    main.appendChild(counterComponent);
    main.appendChild(document.createElement('counter-buttons'));
});