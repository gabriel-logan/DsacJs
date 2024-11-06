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
  peak(): T | null {
    return this.head?.value ?? null;
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
    let listValues = "";

    while (current) {
      listValues += `${current.value} -> `;
      current = current.next;
    }

    listValues += "null";

    this.logger.info(listValues);
  }

  // O(n)
  printReverse(): void {
    if (this.isEmpty()) {
      return this.logger.info("List is empty");
    }

    const reversedValues = this.collectReverseValues(this.head);
    this.logger.info(reversedValues.join(" -> ") + " -> null");
  }

  private collectReverseValues(
    node: ListNode<T> | null,
    values: T[] = [],
  ): T[] {
    if (node === null) {
      return values;
    }

    values = this.collectReverseValues(node.next, values);
    values.push(node.value);
    return values;
  }

  clear(): void {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
}
