import SingleLinkedList from "./SingleLinkedList";

export default class Queue<T = any> {
  private readonly list: SingleLinkedList<T>;

  constructor() {
    this.list = new SingleLinkedList();
  }

  public clear(): void {
    this.list.clear();
  }

  public dequeue(): T | null {
    return this.list.removeFirst();
  }

  public enqueue(value: T): void {
    return this.list.addLast(value);
  }

  public isEmpty(): boolean {
    return this.list.isEmpty();
  }

  public peek(): T | null {
    return this.list.peek();
  }

  public print(): void {
    return this.list.print();
  }

  public size(): number {
    return this.list.size;
  }
}
