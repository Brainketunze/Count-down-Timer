'use strict'

import{timer} from './timmer.js';


export function jayjay(e) {
    e.preventDefault();
    const mins = this.minutes.value;
    console.log(mins);
    timer(mins * 60);
    this.reset();
  };