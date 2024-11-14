# Stack

Stack is a linear data structure which follows a particular order in which the operations are performed. The order may be LIFO(Last In First Out) or FILO(First In Last Out).

## Methods

- `Stack()` - creates a new stack that is empty.

- `push(item)` - adds a new item to the top of the stack.
- `pop()` - removes the top item from the stack.
- `peek()` - returns the top item from the stack but does not remove it.
- `isEmpty()` - tests to see whether the stack is empty.
- `size()` - returns the number of items on the stack.
- `print()` - prints the stack.
- `clear()` - clears the stack.

## Usage

```js
import { Stack } from "dsacjs";

const stack = new Stack();

stack.push(1);
stack.push(2);

console.log(stack.size()); // 2

console.log(stack.peek()); // 2

stack.pop();

console.log(stack.size()); // 1

stack.print(); // 1
```
