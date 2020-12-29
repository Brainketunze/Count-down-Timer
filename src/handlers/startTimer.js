'use strict'

import{timer} from './timmer.js';

export function startTimer() {
    const seconds = parseInt(this.dataset.time);
    timer(seconds);
  }
