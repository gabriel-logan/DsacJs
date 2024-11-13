# Linear Search

Linear search is a search algorithm that finds the position of a target value within an array. Linear search compares the target value to each element of the array in order until it finds a match. If it finds the target value, it returns the index of the target value in the array. If the search ends with the target value not being found, it returns -1.

## Usage

```js
import { linearSearch } from "dsacjs";

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(linearSearch(arr, 5)); // 4
```

## Complexity

- Time complexity: O(n)

## References

- [Wikipedia](https://en.wikipedia.org/wiki/Linear_search)
