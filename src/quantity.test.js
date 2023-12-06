const Quantity = require("./quantity");

test("a teaspoon quantity is equal to a teaspoon quantity", () => {
  const firstTeaspoon = new Quantity(1, "teaspoon");
  const secondTeaspoon = new Quantity(1, "teaspoon");

  expect(firstTeaspoon.equals(secondTeaspoon)).toBe(true);
});

test("two teaspoons is not equal to a teaspoon", () => {
  const firstTeaspoon = new Quantity(2, "teaspoon");
  const secondTeaspoon = new Quantity(1, "teaspoon");

  expect(firstTeaspoon.equals(secondTeaspoon)).toBe(false);
});

test("a teaspoons is not equal to a tablespoon", () => {
  const oneTeaspoon = new Quantity(1, "teaspoon");
  const oneTablespoon = new Quantity(1, "tablespoon");

  expect(oneTeaspoon.equals(oneTablespoon)).toBe(false);
});

test("3 teaspoons is equal to a tablespoon", () => {
  const threeTeaspoon = new Quantity(3, "teaspoon");
  const oneTablespoon = new Quantity(1, "tablespoon");

  expect(threeTeaspoon.equals(oneTablespoon)).toBe(true);
});

test("Compare Quantities Of Teaspoons with Tablespoons", () => {
  const sixTeaspoons = new Quantity(6, "teaspoon");
  const twoTablespoons = new Quantity(2, "tablespoon");

  expect(sixTeaspoons.equals(twoTablespoons)).toBe(true);
});

test("Compare Quantities Of Ounces with Tablespoons", () => {

  // Change unit from string. "primitive obsession"
  const ounces = new Quantity(1, "ounce");
  const tablespoons = new Quantity(2, "tablespoon");

  expect(ounces.equals(tablespoons)).toBe(true);
});

test("Convert ounces to teaspoons", () => {
  const ounces = new Quantity(1, "ounce");

  expect(ounces.convertTo("teaspoon").equals(new Quantity(6, "teaspoon"))).toBe(
    true
  );
});

test("Convert 2 ounces to tablespoons", () => {
  const ounces = new Quantity(2, "ounce");

  expect(
    ounces.convertTo("tablespoon").equals(new Quantity(4, "tablespoon"))
  ).toBe(true);
});

