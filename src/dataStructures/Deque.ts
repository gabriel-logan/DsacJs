import DoublyLinkedList from "./DoublyLinkedList";

export default class Deque<T = any> {
  private readonly list: DoublyLinkedList<T>;

  constructor() {
    this.list = new DoublyLinkedList();
  }

  pushFront(value: T): void {
    this.list.addFirst(value);
  }

  pushBack(value: T): void {
    this.list.addLast(value);
  }

  popFront(): T | null {
    return this.list.removeFirst();
  }

  popBack(): T | null {
    return this.list.removeLast();
  }

  peekFront(): T | null {
    return this.list.peek();
  }

  peekBack(): T | null {
    return this.list.getLast();
  }

  isEmpty(): boolean {
    return this.list.isEmpty();
  }

  size(): number {
    return this.list.size;
  }

  clear(): void {
    this.list.clear();
  }

  toArray(): T[] {
    return this.list.toArray();
  }

  iterator(): IterableIterator<T> {
    return this.list.iterator();
  }

  [Symbol.iterator](): IterableIterator<T> {
    return this.iterator();
  }

  print(): void {
    return this.list.print();
  }
}
