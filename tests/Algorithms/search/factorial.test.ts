import factorial from "../../../src/Algorithms/search/factorial";

describe("factorial", () => {
  it("should return the factorial of a number", () => {
    const n = 5;
    const result = factorial(n);
    expect(result).toBe(120);
  });

  it("should return 1 for 0", () => {
    const n = 0;
    const result = factorial(n);
    expect(result).toBe(1);
  });

  it("should return 1 for 1", () => {
    const n = 1;
    const result = factorial(n);
    expect(result).toBe(1);
  });
});
