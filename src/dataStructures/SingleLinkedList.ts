import Logger from "../lib/Logger";

class ListNode<T = any> {
  public value: T;
  public next: ListNode<T> | null;

  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}

export default class SingleLinkedList<T = any> {
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
  peek(): T | null {
    return this.head?.value ?? null;
  }

  // O(1)
  poll(): T | null {
    return this.removeFirst();
  }

  add(value: T): void;
  add(index: number, value: T): void;

  // O(n)
  add(indexOrValue: number | T, value?: T): void {
    if (typeof indexOrValue === "number" && value !== undefined) {
      this.addAtIndex(indexOrValue, value);
    } else {
      this.addLast(indexOrValue as T);
    }
  }

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
    let previous = null;
    let i = 0;

    while (i < index) {
      previous = current;
      current = current?.next || null;
      i++;
    }

    const newNode = new ListNode(value);
    newNode.next = current;
    if (previous) {
      previous.next = newNode;
    }
    this.size++;
  }

  // O(1)
  addFirst(value: T): void {
    const newNode = new ListNode(value);
    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.size++;
  }

  // O(1)
  addLast(value: T): void {
    const newNode = new ListNode(value);
    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      if (this.tail) {
        this.tail.next = newNode;
      }
      this.tail = newNode;
    }
    this.size++;
  }

  // O(1)
  removeFirst(): T | null {
    if (this.isEmpty()) {
      return null;
    }
    const removedValue = this.head?.value ?? null;
    this.head = this.head?.next || null;
    this.size--;

    // Set tail to null if the list is now empty
    if (this.isEmpty()) {
      this.tail = null;
    }

    return removedValue;
  }

  // O(n)
  removeLast(): T | null {
    if (this.isEmpty()) {
      return null;
    }

    // Case when there's only one node
    if (this.size === 1) {
      const removedValue = this.head?.value ?? null;
      this.head = null;
      this.tail = null;
      this.size--;
      return removedValue;
    }

    // General case with more than one node
    let current = this.head;
    let previous = null;

    while (current?.next) {
      previous = current;
      current = current.next;
    }

    if (previous) {
      previous.next = null;
    }

    this.tail = previous;
    this.size--;

    return current?.value ?? null;
  }

  // O(n)
  print(): void {
    if (this.isEmpty()) {
      return this.logger.info("List is empty");
    }

    let current = this.head;
    const listValues = [];

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

    let current = this.head;
    const listValues = [];

    while (current) {
      listValues.unshift(current.value);
      current = current.next;
    }

    this.logger.info(listValues);
  }

  // O(1)
  clear(): void {
    this.head = null;
    this.tail = null;
    this.size = 0;
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

  // O(1)
  getFirst(): T | null {
    return this.head?.value ?? null;
  }

  // O(1)
  getLast(): T | null {
    return this.tail?.value ?? null;
  }

  // O(n)
  removeAt(index: number): T | null {
    if (index < 0 || index >= this.size) {
      return null;
    }
    return this.removeAtIndex(index);
  }

  // O(n)
  remove(value: T): boolean {
    return this.removeByValue(value);
  }

  // O(n)
  private removeAtIndex(index: number): T | null {
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
    let previous = null;
    let i = 0;

    while (i < index) {
      previous = current;
      current = current?.next || null;
      i++;
    }

    if (previous) {
      previous.next = current?.next || null;
    }

    this.size--;

    return current?.value ?? null;
  }

  // O(n)
  private removeByValue(value: T): boolean {
    let current = this.head;
    let previous = null;

    while (current) {
      if (current.value === value) {
        if (previous) {
          previous.next = current.next;
        } else {
          this.head = current.next;
        }

        this.size--;
        return true;
      }

      previous = current;
      current = current.next;
    }

    return false;
  }

  // O(n)
  toArray(): T[] {
    let current = this.head;
    const listValues = [];

    while (current) {
      listValues.push(current.value);
      current = current.next;
    }

    return listValues;
  }
}
