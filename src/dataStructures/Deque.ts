import DoublyLinkedList from "./DoublyLinkedList";

export default class Deque<T = any> {
  private readonly list: DoublyLinkedList<T>;

  constructor() {
    this.list = new DoublyLinkedList();
  }

  public clear(): void {
    this.list.clear();
  }

  public isEmpty(): boolean {
    return this.list.isEmpty();
  }

  public iterator(): IterableIterator<T> {
    return this.list.iterator();
  }

  public [Symbol.iterator](): IterableIterator<T> {
    return this.iterator();
  }

  public peekBack(): T | null {
    return this.list.getLast();
  }

  public peekFront(): T | null {
    return this.list.peek();
  }

  public popBack(): T | null {
    return this.list.removeLast();
  }

  public popFront(): T | null {
    return this.list.removeFirst();
  }

  public print(): void {
    return this.list.print();
  }

  public pushBack(value: T): void {
    this.list.addLast(value);
  }

  public pushFront(value: T): void {
    this.list.addFirst(value);
  }

  public size(): number {
    return this.list.size;
  }

  public toArray(): T[] {
    return this.list.toArray();
  }
}
