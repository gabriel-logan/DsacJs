import SingleLinkedList from "./SingleLinkedList";

export default class Queue<T = any> {
  private readonly list: SingleLinkedList<T>;

  constructor() {
    this.list = new SingleLinkedList();
  }

  clear(): void {
    this.list.clear();
  }

  dequeue(): T | null {
    return this.list.removeFirst();
  }

  enqueue(value: T): void {
    return this.list.addLast(value);
  }

  isEmpty(): boolean {
    return this.list.isEmpty();
  }

  peek(): T | null {
    return this.list.peek();
  }

  print(): void {
    return this.list.print();
  }

  size(): number {
    return this.list.size;
  }
}
