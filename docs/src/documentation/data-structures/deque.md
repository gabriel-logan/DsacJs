# Deque

Class `Deque` is a double-ended queue, which is a data structure that allows insertion and deletion of elements from both ends. It is a generalization of the queue data structure.

## Class

- `Deque()`: creates a new empty deque.

## Methods

- `clear()`: removes all elements from the deque.
- `isEmpty()`: returns `true` if the deque is empty, `false` otherwise.
- `iterator()`: returns an iterator to traverse the elements in the deque.
- `peekBack()`: returns the element at the back of the deque without removing it.
- `peekFront()`: returns the element at the front of the deque without removing it.
- `popBack()`: removes and returns the element at the back of the deque.
- `popFront()`: removes and returns the element at the front of the deque.
- `print()`: prints all elements in the deque.
- `pushBack(value)`: adds an element to the back of the deque.
- `pushFront(value)`: adds an element to the front of the deque.
- `size()`: returns the number of elements in the deque.
- `toArray()`: returns an array containing all elements in the deque.

## Usage

::: code-group

```js [JavaScript]
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

```ts [TypeScript]
import { Deque } from "dsacjs";

const deque = new Deque<number>();

deque.pushBack(1);
deque.pushBack(2);
deque.pushBack(3);

console.log(deque.toArray()); // [1, 2, 3]

deque.popFront();
deque.popBack();

console.log(deque.toArray()); // [2]
```

:::

## Time Complexity

- `clear()`: O(1)
- `isEmpty()`: O(1)
- `peekBack()`: O(1)
- `peekFront()`: O(1)
- `popBack()`: O(1)
- `popFront()`: O(1)
- `print()`: O(n)
- `pushBack(value)`: O(1)
- `pushFront(value)`: O(1)
- `size()`: O(1)
- `toArray()`: O(n)
