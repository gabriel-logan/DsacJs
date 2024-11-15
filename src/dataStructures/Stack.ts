import SingleLinkedList from "./SingleLinkedList";

export default class Stack<T = any> {
  private readonly list: SingleLinkedList<T>;

  constructor() {
    this.list = new SingleLinkedList();
  }

  clear(): void {
    this.list.clear();
  }

  isEmpty(): boolean {
    return this.list.isEmpty();
  }

  peek(): T | null {
    return this.list.peek();
  }

  pop(): T | null {
    return this.list.removeFirst();
  }

  print(): void {
    return this.list.printReverse();
  }

  push(value: T): void {
    return this.list.addFirst(value);
  }

  size(): number {
    return this.list.size;
  }
}
