const Teaspoon = require("./teaspoon");
const Tablespoon = require("./tablespoon");

test("a teaspoon is a default teaspoon", () => {
  const firstTeaspoon = new Teaspoon(1);
  const secondTeaspoon = new Teaspoon();

  expect(firstTeaspoon.equals(secondTeaspoon)).toBe(true);
});

test("a teaspoon is not 2 teaspoons", () => {
  const firstTeaspoon = new Teaspoon();
  const secondTeaspoon = new Teaspoon(2);

  expect(firstTeaspoon.equals(secondTeaspoon)).toBe(false);
});

test("a tablespoon is equal to 3 teaspoons", () => {
  const tablespoon = new Tablespoon();
  const three_teaspoons = new Teaspoon(3);

  expect(tablespoon.equals(three_teaspoons)).toBe(true);
});
