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

  // O(n)
  private addAtIndex(index: number, value: T): void {
    if (index < 0 || index > this.size) {
      throw new Error("Index out of bounds");
    }

    if (index === 0) {
      this.addFirst(value);
      return;
    }

    if (index === this.size) {
      this.addLast(value);
      return;
    }

    let current = this.head;
    let i = 0;

    while (current && i < index) {
      current = current.next;
      i++;
    }

    if (current) {
      const newNode = new ListNode(value);
      newNode.next = current;
      newNode.prev = current.prev;
      if (current.prev) {
        current.prev.next = newNode;
      }
      current.prev = newNode;
      this.size++;
    }
  }

  public head: ListNode<T> | null;
  public tail: ListNode<T> | null;
  public size: number = 0;

  constructor() {
    this.head = null;
    this.tail = null;
  }

  add(value: T): void;
  add(index: number, value: T): void;

  // O(n) - O(1)
  add(indexOrValue: number | T, value?: T): void {
    if (typeof indexOrValue === "number" && value) {
      this.addAtIndex(indexOrValue, value);
    } else {
      this.addLast(indexOrValue as T);
    }
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

  // O(1)
  clear(): void {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  // O(n)
  contains(value: T): boolean {
    let current = this.head;

    while (current) {
      if (current.value === value) {
        return true;
      }

      current = current.next;
    }

    return false;
  }

  // O(n)
  get(index: number): T | null {
    if (index < 0 || index >= this.size) {
      return null;
    }

    let current = this.head;
    let i = 0;

    while (current && i < index) {
      current = current.next;
      i++;
    }

    return current?.value ?? null;
  }

  // O(1)
  getFirst(): T | null {
    return this.head?.value ?? null;
  }

  // O(1)
  getLast(): T | null {
    return this.tail?.value ?? null;
  }

  // O(n)
  indexOf(value: T): number {
    let current = this.head;
    let index = 0;

    while (current) {
      if (current.value === value) {
        return index;
      }

      current = current.next;
      index++;
    }

    return -1;
  }

  // O(n)
  iterator(): IterableIterator<T> {
    let current = this.head;

    return {
      next(): IteratorResult<T> {
        if (current) {
          const value = current.value;
          current = current.next;
          return { done: false, value };
        }

        return { done: true, value: null };
      },
      [Symbol.iterator](): IterableIterator<T> {
        return this;
      },
    };
  }

  // O(1)
  isEmpty(): boolean {
    return this.size === 0;
  }

  // O(1)
  peek(): T | null {
    return this.head?.value ?? null;
  }

  // O(n)
  poll(): T | null {
    return this.removeFirst();
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

  // O(n)
  removeAt(index: number): T | null {
    if (index < 0 || index >= this.size) {
      return null;
    }

    if (index === 0) {
      return this.removeFirst();
    }

    if (index === this.size - 1) {
      return this.removeLast();
    }

    let current = this.head;

    let i = 0;

    while (current && i < index) {
      current = current.next;
      i++;
    }

    if (current?.prev) {
      current.prev.next = current.next;
    }
    if (current?.next) {
      current.next.prev = current.prev;
    }

    this.size--;

    return current?.value ?? null;
  }

  // O(1)
  removeFirst(): T | null {
    if (this.isEmpty()) {
      return null;
    }

    const value = this.head?.value ?? null;

    if (this.size === 1) {
      this.head = null;
      this.tail = null;
    } else if (this.head) {
      this.head = this.head.next;
      if (this.head) {
        this.head.prev = null;
      }
    }

    this.size--;

    return value;
  }

  // O(1)
  removeLast(): T | null {
    if (this.isEmpty()) {
      return null;
    }

    const value = this.tail?.value ?? null;

    if (this.size === 1) {
      this.head = null;
      this.tail = null;
    } else if (this.tail) {
      this.tail = this.tail.prev;
      if (this.tail) {
        this.tail.next = null;
      }
    }

    this.size--;

    return value;
  }

  // O(n)
  toArray(): T[] {
    const listValues = [];
    let current = this.head;

    while (current) {
      listValues.push(current.value);
      current = current.next;
    }

    return listValues;
  }
}
