const Teaspoon = require("./teaspoon");

class Tablespoon {
  IN_TEASPOONS = 3;

  constructor(amount = 1) {
    this.amount = amount;
  }

  equals(other) {
    if (other instanceof Teaspoon) {
      return this.amount * this.IN_TEASPOONS === other.amount;
    }
    return this.amount === other.amount;
  }
}

module.exports = Tablespoon;
