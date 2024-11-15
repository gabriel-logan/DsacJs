# Single LinkedList

A singly linked list is a linked data structure that consists of a set of sequentially linked records called nodes. Each node contains two fields, called links, that are references to the next node in the sequence of nodes. The beginning node's link points to the next node in the sequence, and the ending node's link points to null to facilitate traversal of the list. It can be conceptualized as a singly linked list formed from the same data items, but in sequential order.

## Class

- `SingleLinkedList()`: creates a new empty linked list.

## Methods

- `add(value)`: adds an element to the end of the linked list.
- `addFirst(value)`: adds an element to the beginning of the linked list.
- `addLast(value)`: adds an element to the end of the linked list.
- `add(index, value)`: adds an element at the specified index in the linked list.
- `clear()`: removes all elements from the linked list.
- `getFirst()`: returns the element at the beginning of the linked list without removing it.
- `getLast()`: returns the element at the end of the linked list without removing it.
- `indexOf(value)`: returns the index of the first occurrence of the specified element in the linked list, or -1 if the linked list does not contain the element.
- `isEmpty()`: returns `true` if the linked list is empty, `false` otherwise.
- `peek()`: returns the element at the beginning of the linked list without removing it.
- `poll()`: removes and returns the element at the beginning of the linked list.
- `print()`: prints all elements in the linked list.
- `printReverse()`: prints all elements in the linked list in reverse order.
- `remove(value)`: removes the first occurrence of the specified element from the linked list.
- `removeAt(index)`: removes and returns the element at the specified index in the linked list.
- `removeFirst()`: removes and returns the element at the beginning of the linked list.
- `removeLast()`: removes and returns the element at the end of the linked list.
- `toArray()`: returns an array containing all elements in the linked list.

## Usage

::: code-group

```ts [TypeScript]
import { SingleLinkedList } from "dsacjs";

const linkedList = new SingleLinkedList<number>();

linkedList.add(1);
linkedList.add(2);

console.log(linkedList.toArray()); // [1, 2]
```

```js [JavaScript]
const { SingleLinkedList } = require("dsacjs");

const linkedList = new SingleLinkedList();

linkedList.add(1);
linkedList.add(2);

console.log(linkedList.toArray()); // [1, 2]
```

:::
