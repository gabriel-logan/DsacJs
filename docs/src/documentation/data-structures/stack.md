# Stack

Stack is a linear data structure which follows a particular order in which the operations are performed. The order may be LIFO(Last In First Out) or FILO(First In Last Out).

## Class

- `Stack()` - creates a new stack that is empty.

## Methods

- `clear()` - clears the stack.
- `isEmpty()` - tests to see whether the stack is empty.
- `peek()` - returns the top item from the stack but does not remove it.
- `pop()` - removes the top item from the stack.
- `print()` - prints the stack.
- `push(item)` - adds a new item to the top of the stack.
- `size()` - returns the number of items on the stack.

## Usage

```ts
import { Stack } from "dsacjs";

const stack = new Stack<number>();

stack.push(1);
stack.push(2);

console.log(stack.size()); // 2

console.log(stack.peek()); // 2

stack.pop();

console.log(stack.size()); // 1

stack.print(); // 1
```
