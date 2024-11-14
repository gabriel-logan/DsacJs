# Queue

Queue is a linear data structure that follows the First In First Out (FIFO) principle. The elements are inserted at the rear end and removed from the front end. The element that is inserted first is the first one to be removed.

## Methods

- `Queue()`: creates a new empty queue.

- `enqueue(value)`: adds an element to the rear end of the queue.
- `dequeue()`: removes and returns the element at the front end of the queue.
- `peek()`: returns the element at the front end of the queue without removing it.
- `isEmpty()`: returns `true` if the queue is empty, `false` otherwise.
- `size()`: returns the number of elements in the queue.
- `clear()`: removes all elements from the queue.
- `print()`: prints all elements in the queue.

## Usage

```js
import { Queue } from "dsacjs";

const queue = new Queue();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

console.log(queue.size()); // 3

console.log(queue.peek()); // 1

console.log(queue.dequeue()); // 1

console.log(queue.size()); // 2

queue.clear();

console.log(queue.isEmpty()); // true
```