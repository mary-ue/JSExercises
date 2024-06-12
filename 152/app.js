'use strict';

class hashGenerator {
  constructor(hashLength) {
    this.startSymbolCode = 48;
    this.finishSymbolCode = 126;

    if (!isNaN(parseInt(hashLength))) {
      this.hashLength = parseInt(hashLength);
      this.generateHash();
    } else {
      this.hash = false;
    }
  }

  randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }

  generateHash() {
    this.hash = '';
    for (let i = 0; i < this.hashLength; i++) {
      this.hash += String.fromCharCode(this.randomInteger(this.startSymbolCode, this.finishSymbolCode));
    }
  }
}

let hash = new hashGenerator(10);
console.log(hash.hash);