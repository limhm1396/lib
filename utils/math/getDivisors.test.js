const { getDivisors } = require("./getDivisors");

describe("getDivisors", () => {
  it("n = 10", () => {
    expect(getDivisors(10)).toEqual([1, 2, 5, 10]);
  });

  it("n = 9", () => {
    expect(getDivisors(9)).toEqual([1, 3, 9]);
  });

  it("n = 1", () => {
    expect(getDivisors(1)).toEqual([1]);
  });

  it("n = 13", () => {
    expect(getDivisors(13)).toEqual([1, 13]);
  });
});
