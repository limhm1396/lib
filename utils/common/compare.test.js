const { compare } = require("./compare");

describe("compare", () => {
  it("a = 1, b = 9", () => {
    expect(compare(1, 9)).toEqual(-1);
  });

  it("a = 1, b = 1", () => {
    expect(compare(1, 1)).toEqual(0);
  });

  it("a = 9, b = 1", () => {
    expect(compare(9, 1)).toEqual(1);
  });
});
