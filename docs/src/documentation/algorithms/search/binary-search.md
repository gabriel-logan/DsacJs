# Binary Search

Binary search is a search algorithm that finds the position of a target value within a sorted array. Binary search compares the target value to the middle element of the array. If they are not equal, the half in which the target cannot lie is eliminated and the search continues on the remaining half, again taking the middle element to compare to the target value, and repeating this until the target value is found. If the search ends with the remaining half being empty, the target is not in the array.

## Usage

```js
import { binarySearch } from "dsacjs";

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(binarySearch(arr, 5)); // 4
```

## Complexity

- Time complexity: O(log n)

## References

- [Wikipedia](https://en.wikipedia.org/wiki/Binary_search_algorithm)
