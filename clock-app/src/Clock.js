// src/Clock.js
class Clock {
    constructor(hours, minutes, seconds, country) {
      this.hours = parseInt(hours);
      this.minutes = parseInt(minutes);
      this.seconds = parseInt(seconds);
      this.country = country;
    }
  
    convertToSeconds() {
      return this.hours * 3600 + this.minutes * 60 + this.seconds;
    }
  
    show() {
      const pad = (num) => String(num).padStart(2, '0');
      return `${pad(this.hours)}:${pad(this.minutes)}:${pad(this.seconds)}`;
    }
  }
  
  export default Clock;
  