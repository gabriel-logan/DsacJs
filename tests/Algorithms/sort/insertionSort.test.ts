import insertionSort from "../../../src/Algorithms/sort/insertionSort";

describe("insertionSort", () => {
  it("should sort an array in ascending order", () => {
    const arr = [5, 3, 8, 2, 1, 4];
    const result = insertionSort(arr);
    expect(result).toEqual([1, 2, 3, 4, 5, 8]);
  });

  it("should sort an array in descending order", () => {
    const arr = [5, 3, 8, 2, 1, 4];
    const result = insertionSort(arr, (a, b) => a < b);
    expect(result).toEqual([8, 5, 4, 3, 2, 1]);
  });

  it("should sort a single-element array", () => {
    const arr = [5];
    const result = insertionSort(arr);
    expect(result).toEqual([5]);
  });

  it("should sort an empty array", () => {
    const arr: number[] = [];
    const result = insertionSort(arr);
    expect(result).toEqual([]);
  });
});