# Merge Sort

Merge sort is a divide-and-conquer algorithm that was invented by John von Neumann in 1945. It is a comparison-based sorting algorithm that is known for its stability and efficiency. Merge sort is a stable sorting algorithm, which means that it preserves the relative order of equal elements in the sorted output. It is also an efficient sorting algorithm, with a time complexity of O(n log n) in the worst case.

## Usage

```js
import { mergeSort } from "dsacjs";

const arr = [5, 2, 9, 3, 5, 7, 1, 8, 6];

mergeSort(arr); // [1, 2, 3, 5, 5, 6, 7, 8, 9]
```

## Arguments

The function `mergeSort` takes the following arguments:

- `arr` (type: `Array`): An array of elements to be sorted.
- `compareFn` (type: `Function`, optional): A function that defines an alternative sort order.

## Example

```js
import { mergeSort } from "dsacjs";

const arr = ["banana", "apple", "orange", "mango"];

mergeSort(arr, (a, b) => a.localeCompare(b)); // ["apple", "banana", "mango", "orange"]
```

## Complexity

- Time complexity: O(n log n)

## References

- [Wikipedia](https://en.wikipedia.org/wiki/Merge_sort)
