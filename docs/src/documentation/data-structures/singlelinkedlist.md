# Single LinkedList

A singly linked list is a linked data structure that consists of a set of sequentially linked records called nodes. Each node contains two fields, called links, that are references to the next node in the sequence of nodes. The beginning node's link points to the next node in the sequence, and the ending node's link points to null to facilitate traversal of the list. It can be conceptualized as a singly linked list formed from the same data items, but in sequential order.

## Usage

```js
import { SingleLinkedList } from "dsacjs";

const list = new SingleLinkedList();

list.pushFront(1);

list.pushBack(2);

console.log(list.front()); // 1

list.popFront();

console.log(list.front()); // 2
```