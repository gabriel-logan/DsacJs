# Deque

Class `Deque` is a double-ended queue, which is a data structure that allows insertion and deletion of elements from both ends. It is a generalization of the queue data structure.

## Methods

- `Deque()`: creates a new empty deque.

- `pushFront(value)`: adds an element to the front of the deque.
- `pushBack(value)`: adds an element to the back of the deque.
- `popFront()`: removes and returns the element at the front of the deque.
- `popBack()`: removes and returns the element at the back of the deque.
- `peekFront()`: returns the element at the front of the deque without removing it.
- `peekBack()`: returns the element at the back of the deque without removing it.
- `isEmpty()`: returns `true` if the deque is empty, `false` otherwise.
- `size()`: returns the number of elements in the deque.
- `clear()`: removes all elements from the deque.
- `toArray()`: returns an array containing all elements in the deque.
- `iterator()`: returns an iterator to traverse the elements in the deque.
- `print()`: prints all elements in the deque.

## Usage

```js
import { Deque } from "dsacjs";

const deque = new Deque();

deque.pushBack(1);
deque.pushBack(2);
deque.pushBack(3);

console.log(deque.toArray()); // [1, 2, 3]

deque.popFront();
deque.popBack();

console.log(deque.toArray()); // [2]
```

## Time Complexity

- `pushFront(value)`: O(1)
- `pushBack(value)`: O(1)
- `popFront()`: O(1)
- `popBack()`: O(1)
- `peekFront()`: O(1)
- `peekBack()`: O(1)
- `isEmpty()`: O(1)
- `size()`: O(1)
- `clear()`: O(1)
- `toArray()`: O(n)
