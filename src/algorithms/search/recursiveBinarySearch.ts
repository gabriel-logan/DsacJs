export default function recursiveBinarySearch<T = any>(
  array: T[],
  target: T,
  left = 0,
  right = array.length - 1,
): number {
  if (left > right) {
    return -1;
  }

  const middle = Math.floor((left + right) / 2);

  if (array[middle] === target) {
    return middle;
  }

  if (array[middle] > target) {
    return recursiveBinarySearch(array, target, left, middle - 1);
  }

  return recursiveBinarySearch(array, target, middle + 1, right);
}
