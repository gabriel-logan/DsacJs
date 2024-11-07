export default function insertionSort(
  arr: number[],
  compareFn: (a: number, b: number) => boolean = (a, b) => a > b,
): number[] {
  const n = arr.length;
  for (let i = 1; i < n; i++) {
    let j = i;
    while (j > 0 && compareFn(arr[j - 1], arr[j])) {
      [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]];
      j--;
    }
  }
  return arr;
}
