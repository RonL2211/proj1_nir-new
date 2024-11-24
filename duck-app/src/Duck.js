// src/Duck.js
class Duck {
  constructor(name, color, age, weight, image) {
    this.name = name;
    this.color = color;
    this.age = parseInt(age);
    this.weight = parseFloat(weight);
    this.image = image;
  }

  show() {
    return `
      Name: ${this.name}
      Color: ${this.color}
      Age: ${this.age}
      Weight: ${this.weight}
    `;
  }

  quack() {
    // Calculate the number of times to print "Quack"
    const timesToPrint = Math.floor((this.age * this.weight) / 2);
    // Create the quack text
    const quackText = 'Quack '.repeat(timesToPrint);
    // Return the quack text
    return quackText;
  }
}

export default Duck;