class Teaspoon {
  constructor(amount = 1) {
    this.amount = amount;
  }

  equals(other) {
    return this.amount === other.amount;
  }
}


module.exports = Teaspoon;
