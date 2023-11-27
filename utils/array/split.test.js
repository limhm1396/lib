const { split } = require("./split");

describe("split", () => {
  it("split array without num", () => {
    expect(split([1, 2, 3, 4, 5])).toEqual([[1], [2], [3], [4], [5]]);
  });

  it("split array by 2 units", () => {
    expect(split([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]]);
  });

  it("split array by 5 units", () => {
    expect(split([1, 2, 3, 4, 5], 5)).toEqual([[1, 2, 3, 4, 5]]);
  });
});
