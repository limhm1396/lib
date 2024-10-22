const { combination } = require("./combination");

describe("combination", () => {
  it("list = [1,2,3], k = 2", () => {
    expect(combination([1, 2, 3], 2)).toEqual([
      [1, 2],
      [1, 3],
      [2, 3],
    ]);
  });

  it("list = [1,2,3,4], k = 3", () => {
    expect(combination([1, 2, 3, 4], 3)).toEqual([
      [1, 2, 3],
      [1, 2, 4],
      [1, 3, 4],
      [2, 3, 4],
    ]);
  });
});
