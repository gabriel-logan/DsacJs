# Insertion Sort

Insertion sort is a simple sorting algorithm that builds the final sorted array one item at a time. It is much less efficient on large lists than more advanced algorithms such as quicksort, heapsort, or merge sort.

## Usage

```js
import { insertionSort } from "dsacjs";

const arr = [64, 34, 25, 12, 22, 11, 90];

console.log(insertionSort(arr)); // [11, 12, 22, 25, 34, 64, 90]
```

## Arguments

The function `insertionSort` takes the following arguments:

- `arr` (type: `Array`): An array of elements to be sorted.
- `compareFn` (type: `Function`, optional): A function that defines an alternative sort order.

## Example

```js
import { insertionSort } from "dsacjs";

const arr = ["banana", "apple", "orange", "mango"];

console.log(insertionSort(arr, (a, b) => a.localeCompare(b))); // ["apple", "banana", "mango", "orange"]
```

## Complexity

- Time complexity: O(n^2)

## References

- [Wikipedia](https://en.wikipedia.org/wiki/Insertion_sort)
