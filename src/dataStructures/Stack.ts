import SingleLinkedList from "./SingleLinkedList";

export default class Stack<T = any> {
  private readonly list: SingleLinkedList<T>;

  constructor() {
    this.list = new SingleLinkedList();
  }

  public clear(): void {
    this.list.clear();
  }

  public isEmpty(): boolean {
    return this.list.isEmpty();
  }

  public peek(): T | null {
    return this.list.peek();
  }

  public pop(): T | null {
    return this.list.removeFirst();
  }

  public print(): void {
    return this.list.printReverse();
  }

  public push(value: T): void {
    return this.list.addFirst(value);
  }

  public size(): number {
    return this.list.size;
  }
}
