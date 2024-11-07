import Logger from "../lib/Logger";

class ListNode<T = any> {
  public value: T;
  public next: ListNode<T> | null;
  public prev: ListNode<T> | null;

  constructor(value: T) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

export default class DoublyLinkedList<T = any> {
  private readonly logger = new Logger();

  public head: ListNode<T> | null;
  public tail: ListNode<T> | null;
  public size: number = 0;

  constructor() {
    this.head = null;
    this.tail = null;
  }

  // O(1)
  isEmpty(): boolean {
    return this.size === 0;
  }

  // O(1)
  addFirst(value: T): void {
    const newNode = new ListNode(value);

    if (this.isEmpty()) {
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      if (this.head) {
        this.head.prev = newNode;
      }
    }

    this.head = newNode;

    this.size++;
  }

  // O(1)
  addLast(value: T): void {
    const newNode = new ListNode(value);

    if (this.isEmpty()) {
      this.head = newNode;
    } else {
      if (this.tail) {
        this.tail.next = newNode;
      }
      newNode.prev = this.tail;
    }

    this.tail = newNode;

    this.size++;
  }

  // O(n)
  print(): void {
    if (this.isEmpty()) {
      return this.logger.info("List is empty");
    }

    const listValues = [];
    let current = this.head;

    while (current) {
      listValues.push(current.value);
      current = current.next;
    }

    this.logger.info(listValues);
  }

  // O(n)
  printReverse(): void {
    if (this.isEmpty()) {
      return this.logger.info("List is empty");
    }

    const listValues = [];
    let current = this.tail;

    while (current) {
      listValues.push(current.value);
      current = current.prev;
    }

    this.logger.info(listValues);
  }
}
