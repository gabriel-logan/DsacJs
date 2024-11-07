import linearSearch from "../../../src/Algorithms/search/linearSearch";

describe("linearSearch", () => {
  it("should return the index of the target in an array", () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const target = 5;
    const result = linearSearch(arr, target);
    expect(result).toBe(4);
  });

  it("should return -1 if the target is not in the array", () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const target = 11;
    const result = linearSearch(arr, target);
    expect(result).toBe(-1);
  });

  it("should return the index of the target in a single-element array", () => {
    const arr = [5];
    const target = 5;
    const result = linearSearch(arr, target);
    expect(result).toBe(0);
  });

  it("should return -1 if the target is not in a single-element array", () => {
    const arr = [5];
    const target = 3;
    const result = linearSearch(arr, target);
    expect(result).toBe(-1);
  });

  it("should return -1 for an empty array", () => {
    const arr: number[] = [];
    const target = 5;
    const result = linearSearch(arr, target);
    expect(result).toBe(-1);
  });
});
