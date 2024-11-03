import add from "../src";

describe("index", () => {
  it("should pass", () => {
    expect(add(1, 1)).toBe(2);
  });
});
