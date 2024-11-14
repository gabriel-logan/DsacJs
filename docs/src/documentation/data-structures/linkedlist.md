# LinkedList

- This function uses the implementation of a Doubly LinkedList

A doubly linked list is a linked data structure that consists of a set of sequentially linked records called nodes. Each node contains two fields, called links, that are references to the previous and to the next node in the sequence of nodes. The beginning and ending nodes' previous and next links, respectively, point to some kind of terminator, typically a sentinel node or null, to facilitate traversal of the list. If there is only one sentinel node, then the list is circularly linked via the sentinel node. It can be conceptualized as two singly linked lists formed from the same data items, but in opposite sequential orders.

## Methods

- `LinkedList()`: creates a new empty linked list.

- `isEmpty()`: returns `true` if the linked list is empty, `false` otherwise.
- `addFirst(value)`: adds an element to the beginning of the linked list.
- `addLast(value)`: adds an element to the end of the linked list.
- `print()`: prints all elements in the linked list.
- `printReverse()`: prints all elements in the linked list in reverse order.
- `add(value)`: adds an element to the end of the linked list.
- `add(index, value)`: adds an element at the specified index in the linked list.
- `removeAt(index)`: removes and returns the element at the specified index in the linked list.
- `removeFirst()`: removes and returns the element at the beginning of the linked list.
- `removeLast()`: removes and returns the element at the end of the linked list.
- `contains(value)`: returns `true` if the linked list contains the specified element, `false` otherwise.
- `clear()`: removes all elements from the linked list.
- `peek()`: returns the element at the beginning of the linked list without removing it.
- `get(index)`: returns the element at the specified index in the linked list without removing it.
- `getFirst()`: returns the element at the beginning of the linked list without removing it.
- `getLast()`: returns the element at the end of the linked list without removing it.
- `indexOf(value)`: returns the index of the first occurrence of the specified element in the linked list, or -1 if the linked list does not contain the element.
- `ìteraor()`: returns an iterator to traverse the elements in the linked list.
- `toArray()`: returns an array containing all elements in the linked list.
- `poll()`: removes and returns the element at the beginning of the linked list.

## Usage

```js
import { LinkedList } from "dsacjs";

const linkedList = new LinkedList();

linkedList.add(1);
linkedList.add(2);

console.log(linkedList.toArray()); // [1, 2]

linkedList.addFirst(0);
linkedList.addLast(3);

console.log(linkedList.toArray()); // [0, 1, 2, 3]

linkedList.removeFirst();
linkedList.removeLast();

console.log(linkedList.toArray()); // [1, 2]

linkedList.add(1, 0);

console.log(linkedList.toArray()); // [1, 0, 2]

console.log(linkedList.get(1)); // 0

console.log(linkedList.indexOf(2)); // 2
```
