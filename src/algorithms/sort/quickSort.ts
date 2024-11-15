export default function quickSort<T = any>(
  arr: T[],
  compareFn: (a: T, b: T) => boolean = (a, b) => a > b,
): T[] {
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[0];
  const left = [];
  const right = [];

  for (let i = 1; i < arr.length; i++) {
    if (compareFn(pivot, arr[i])) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return [...quickSort(left, compareFn), pivot, ...quickSort(right, compareFn)];
}
