'use strict';


import { jayjay } from '../handlers/preventDefault.js';

/**
 * @name user input
 * calls the reverseHandler when a user types in the input field
 */
document.customForm.addEventListener('submit', jayjay)
