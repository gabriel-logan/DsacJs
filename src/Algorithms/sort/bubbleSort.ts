export default function bubbleSort(
  arr: number[],
  compareFn: (a: number, b: number) => boolean = (a, b) => a > b,
): number[] {
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
