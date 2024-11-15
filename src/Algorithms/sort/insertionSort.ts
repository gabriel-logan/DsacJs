export default function insertionSort<T = any>(
  arr: T[],
  compareFn: (a: T, b: T) => boolean = (a, b) => a > b,
): T[] {
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
