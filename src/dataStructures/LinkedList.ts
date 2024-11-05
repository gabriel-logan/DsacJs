import Logger from "../lib/Logger";

class ListNode<T = any> {
  public value: T;
  public next: ListNode<T> | null;

  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}

export default class LinkedList<T = any> {
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
  prepend(value: T): void {
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
  append(value: T): void {
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

    return removedValue;
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
}
