export default function mergeSort(
  arr: number[],
  compareFn: (a: number, b: number) => boolean = (a, b) => a > b,
): number[] {
  if (arr.length <= 1) {
    return arr;
  }

  const merge = (left: number[], right: number[]): number[] => {
    const result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
      if (compareFn(left[leftIndex], right[rightIndex])) {
        result.push(right[rightIndex]);
        rightIndex++;
      } else {
        result.push(left[leftIndex]);
        leftIndex++;
      }
    }

    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
  };

  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  return merge(mergeSort(left, compareFn), mergeSort(right, compareFn));
}
