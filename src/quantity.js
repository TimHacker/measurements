class Quantity {
  constructor(amount, unit) {
    this.amount = amount;
    this.unit = unit;
  }

  converter = {
    teaspoon: 1,
    tablespoon: 3,
    ounce: 6,
  };

  equals(other) {
    return (
      this.amount * this.converter[this.unit] ===
      other.amount * other.converter[other.unit]
    );
  }

  convertTo(newUnit) {
    return new Quantity(
      (this.converter[this.unit] / this.converter[newUnit]) * this.amount,
      newUnit
    );
  }
}

module.exports = Quantity;
