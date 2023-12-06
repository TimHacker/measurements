class Quantity {
  constructor(amount, unit) {
    this.amount = amount;
    this.unit = unit;
  }

  converter = {
    teaspoon: 1,
    tablespoon: 3,
    ounce: 6
  };

  equals(other) {
    return (
      this.amount * this.converter[this.unit] ===
      other.amount * other.converter[other.unit]
    );
  }

  convertTo(other) {
    return new Quantity(6, "teaspoon")
  }
}

module.exports = Quantity;
