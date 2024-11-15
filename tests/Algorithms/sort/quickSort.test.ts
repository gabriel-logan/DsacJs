import quickSort from "../../../src/Algorithms/sort/quickSort";

describe("quickSort", () => {
  it("should sort an array in ascending order", () => {
    const arr = [5, 3, 8, 2, 1, 4];
    const result = quickSort(arr);
    expect(result).toEqual([1, 2, 3, 4, 5, 8]);
  });

  it("should sort an array in descending order", () => {
    const arr = [5, 3, 8, 2, 1, 4];
    const result = quickSort(arr, (a, b) => a < b);
    expect(result).toEqual([8, 5, 4, 3, 2, 1]);
  });

  it("should sort a single-element array", () => {
    const arr = [5];
    const result = quickSort(arr);
    expect(result).toEqual([5]);
  });

  it("should sort an empty array", () => {
    const arr: number[] = [];
    const result = quickSort(arr);
    expect(result).toEqual([]);
  });

  it("should sort an array of strings", () => {
    const arr = ["dog", "cat", "elephant", "bird"];
    const result = quickSort(arr);
    expect(result).toEqual(["bird", "cat", "dog", "elephant"]);
  });

  it("should sort an array of strings in descending order", () => {
    const arr = ["dog", "cat", "elephant", "bird"];
    const result = quickSort(arr, (a, b) => a < b);
    expect(result).toEqual(["elephant", "dog", "cat", "bird"]);
  });
});
