export default function mergeSort<T = any>(
  arr: T[],
  compareFn: (a: T, b: T) => boolean = (a, b) => a > b,
): T[] {
  if (arr.length <= 1) {
    return arr;
  }

  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  return merge(
    mergeSort(left, compareFn),
    mergeSort(right, compareFn),
    compareFn,
  );
}

function merge<T>(
  left: T[],
  right: T[],
  compareFn: (a: T, b: T) => boolean,
): T[] {
  const result: T[] = [];
  let i = 0;
  let j = 0;

  while (i < left.length && j < right.length) {
    if (compareFn(left[i], right[j])) {
      result.push(right[j]);
      j++;
    } else {
      result.push(left[i]);
      i++;
    }
  }

  return result.concat(left.slice(i)).concat(right.slice(j));
}
