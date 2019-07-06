import './buttons.js';
import './counter.js';

window.addEventListener('load', () => {
    const main = document.querySelector('main');

    const counter = document.createElement('counter-component');
    counter.count = 1;

    main.appendChild(counter);
    main.appendChild(document.createElement('counter-buttons'));
});