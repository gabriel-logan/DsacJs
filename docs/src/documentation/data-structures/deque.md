# Deque

Class `Deque` is a double-ended queue, which is a data structure that allows insertion and deletion of elements from both ends. It is a generalization of the queue data structure.

## Usage

```js
import { Deque } from "dsacjs";

const deque = new Deque();

deque.pushFront(1);
deque.pushBack(2);

console.log(deque.front()); // 1

deque.popFront();

console.log(deque.front()); // 2
```
