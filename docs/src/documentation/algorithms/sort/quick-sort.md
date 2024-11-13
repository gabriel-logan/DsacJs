# Quick Sort

Quick sort is a divide-and-conquer algorithm that was invented by Tony Hoare in 1960. It is a comparison-based sorting algorithm that is known for its efficiency. Quick sort is an unstable sorting algorithm, which means that it does not preserve the relative order of equal elements in the sorted output. It is also an efficient sorting algorithm, with a time complexity of O(n log n) in the average case.

## Usage

```js
import { quickSort } from "dsacjs";

const arr = [5, 2, 9, 3, 5, 7, 1, 8, 6];

quickSort(arr); // [1, 2, 3, 5, 5, 6, 7, 8, 9]
```

## Complexity

- Time complexity: O(n log n)

## References

- [Wikipedia](https://en.wikipedia.org/wiki/Quicksort)
