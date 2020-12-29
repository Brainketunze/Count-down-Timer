'use strict';

import { startTimer } from '../handlers/startTimer.js';

const buttons = document.querySelectorAll('[data-time]');

/**
 * @name change separator
 * calls handler that changes the mirror-art's separator
 */
buttons.forEach(button => button.addEventListener('click', startTimer));


