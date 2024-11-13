# Bubble Sort

Bubble sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order. The pass through the

list is repeated until the list is sorted.

## Usage

```js
import { bubbleSort } from "dsacjs";

const arr = [64, 34, 25, 12, 22, 11, 90];

console.log(bubbleSort(arr)); // [11, 12, 22, 25, 34, 64, 90]
```

## Complexity

- Time complexity: O(n^2)

## References

- [Wikipedia](https://en.wikipedia.org/wiki/Bubble_sort)
