const { div } = require("./div");

describe("div", () => {
  it("a = 10, b = 3", () => {
    expect(div(10, 3)).toEqual(3);
  });

  it("a = 34, b = 7", () => {
    expect(div(34, 7)).toEqual(4);
  });
});
