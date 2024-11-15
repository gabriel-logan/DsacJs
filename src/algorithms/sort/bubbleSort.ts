export default function bubbleSort<T = any>(
  arr: T[],
  compareFn: (a: T, b: T) => boolean = (a, b) => a > b,
): T[] {
  const n = arr.length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (compareFn(arr[j], arr[j + 1])) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}
