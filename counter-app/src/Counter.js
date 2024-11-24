// src/Counter.js
class Counter {
    constructor() {
      this.count = 0;
    }
  
    initialize(value) {
      this.count = parseInt(value);
    }
  
    increment() {
      this.count += 1;
    }
  
    go() {
      let numbers = [];
      for (let i = this.count; i >= 0; i--) {
        numbers.push(i);
      }
      return numbers;
    }
  }
  
  export default Counter;
  