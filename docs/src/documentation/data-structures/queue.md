# Queue

Queue is a linear data structure that follows the First In First Out (FIFO) principle. The elements are inserted at the rear end and removed from the front end. The element that is inserted first is the first one to be removed.

## Usage

```js
import { Queue } from "dsacjs";

const queue = new Queue();

queue.enqueue(1);

queue.enqueue(2);

console.log(queue.front()); // 1

queue.dequeue();

console.log(queue.front()); // 2
```
