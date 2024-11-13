# LinkedList

- This function uses the implementation of a Doubly LinkedList

A doubly linked list is a linked data structure that consists of a set of sequentially linked records called nodes. Each node contains two fields, called links, that are references to the previous and to the next node in the sequence of nodes. The beginning and ending nodes' previous and next links, respectively, point to some kind of terminator, typically a sentinel node or null, to facilitate traversal of the list. If there is only one sentinel node, then the list is circularly linked via the sentinel node. It can be conceptualized as two singly linked lists formed from the same data items, but in opposite sequential orders.

## Usage

```js
import { LinkedList } from "dsacjs";

const list = new LinkedList();

list.pushFront(1);

list.pushBack(2);

console.log(list.front()); // 1

list.popFront();

console.log(list.front()); // 2
```
