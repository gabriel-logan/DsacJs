# Insertion Sort

Insertion sort is a simple sorting algorithm that builds the final sorted array one item at a time. It is much less efficient on large lists than more advanced algorithms such as quicksort, heapsort, or merge sort.

## Usage

```js
import { insertionSort } from "dsacjs";

const arr = [64, 34, 25, 12, 22, 11, 90];

console.log(insertionSort(arr)); // [11, 12, 22, 25, 34, 64, 90]
```

## Complexity

- Time complexity: O(n^2)

## References

- [Wikipedia](https://en.wikipedia.org/wiki/Insertion_sort)
