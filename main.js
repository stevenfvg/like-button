import './style.css';
import { setupCounter } from './counter.js';

document.querySelector('#app').innerHTML = `
  <div>
    <div class="card">
      <button id="counter" type="button"></button>
      <button id="decrement" type="button">
        <i class="bi bi-hand-thumbs-down-fill"></i>
      </button>
    </div>
  </div>
`;

// Function that gets HTML elements as parameters
setupCounter(
    document.querySelector('#counter'),
    document.querySelector('#decrement'),
    document.querySelector('title')
);
