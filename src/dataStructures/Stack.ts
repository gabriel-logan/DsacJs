import SingleLinkedList from "./SingleLinkedList";

export default class Stack<T = any> {
  private readonly list: SingleLinkedList<T>;

  constructor() {
    this.list = new SingleLinkedList();
  }

  push(value: T): void {
    return this.list.addFirst(value);
  }

  pop(): T | null {
    return this.list.removeFirst();
  }

  peek(): T | null {
    return this.list.peek();
  }

  isEmpty(): boolean {
    return this.list.isEmpty();
  }

  size(): number {
    return this.list.size;
  }

  print(): void {
    return this.list.printReverse();
  }

  clear(): void {
    this.list.clear();
  }
}
