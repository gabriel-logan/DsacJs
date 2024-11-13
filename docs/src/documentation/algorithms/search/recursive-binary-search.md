# Recursive Binary Search

Binary search is a search algorithm that finds the position of a target value within a sorted array. Binary search compares the target value to the middle element of the array. If the target value is less than the middle element, the search continues in the lower half of the array. If the target value is greater than the middle element, the search continues in the upper half of the array. This process continues until the target value is found or the search ends with the target value not being found.

## Usage

```js
import { recursiveBinarySearch } from "dsacjs";

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(recursiveBinarySearch(arr, 5)); // 4
```

## Complexity

- Time complexity: O(log n)

## References

- [Wikipedia](https://en.wikipedia.org/wiki/Binary_search_algorithm)
