import DoublyLinkedList from "./DoublyLinkedList";

export default class Deque<T = any> {
  private readonly list: DoublyLinkedList<T>;

  constructor() {
    this.list = new DoublyLinkedList();
  }

  clear(): void {
    this.list.clear();
  }

  isEmpty(): boolean {
    return this.list.isEmpty();
  }

  iterator(): IterableIterator<T> {
    return this.list.iterator();
  }

  [Symbol.iterator](): IterableIterator<T> {
    return this.iterator();
  }

  peekBack(): T | null {
    return this.list.getLast();
  }

  peekFront(): T | null {
    return this.list.peek();
  }

  popBack(): T | null {
    return this.list.removeLast();
  }

  popFront(): T | null {
    return this.list.removeFirst();
  }

  print(): void {
    return this.list.print();
  }

  pushBack(value: T): void {
    this.list.addLast(value);
  }

  pushFront(value: T): void {
    this.list.addFirst(value);
  }

  size(): number {
    return this.list.size;
  }

  toArray(): T[] {
    return this.list.toArray();
  }
}
