import factorial from "../../../src/algorithms/math/factorial";

describe("factorial", () => {
  it("should return the factorial of 5", () => {
    const n = 5;
    const result = factorial(n);
    expect(result).toBe(120);
  });

  it("should return the factorial of 10", () => {
    const n = 10;
    const result = factorial(n);
    expect(result).toBe(3628800);
  });

  it("should return the factorial of 3", () => {
    const n = 3;
    const result = factorial(n);
    expect(result).toBe(6);
  });

  it("should return the factorial of PI", () => {
    const n = Math.PI;
    const result = factorial(n);
    expect(result).toBeCloseTo(7.188076924);
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

  it("should throw an error for negative numbers", () => {
    const n = -1;
    expect(() => factorial(n)).toThrow(
      "Factorial of negative number is not defined",
    );
  });
});
