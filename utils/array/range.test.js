const { range } = require("./range");

describe("range", () => {
  it("start = 1, end = 5", () => {
    expect(range(1, 5)).toEqual([1, 2, 3, 4, 5]);
  });

  it("start = 1, end = 10, step = 2", () => {
    expect(range(1, 10, 2)).toEqual([1, 3, 5, 7, 9]);
  });

  it("start = 5, end = 1, step = -1", () => {
    expect(range(5, 1, -1)).toEqual([5, 4, 3, 2, 1]);
  });
});
