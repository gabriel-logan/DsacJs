import Logger from "../lib/Logger";

class ListNode<T = any> {
  public data: T;
  public next: ListNode<T> | null;

  constructor(data: T, next?: ListNode<T>) {
    this.data = data;
    this.next = next || null;
  }
}

export default class LinkedList<T = any> {
  private readonly logger = new Logger();

  public head: ListNode<T> | null = null;
  public tail: ListNode<T> | null = null;
  public size: number = 0;

  // O(1)
  isEmpty(): boolean {
    return this.size === 0;
  }

  // O(1)
  prepend(data: T): void {
    const newNode = new ListNode(data);
    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.size++;
  }

  print(): void {
    if (this.isEmpty()) {
      return this.logger.info("List is empty");
    }

    let current = this.head;
    let listValues = "";

    while (current) {
      listValues += `${current.data} -> `;
      current = current.next;
    }

    listValues += "null";

    this.logger.info(listValues);
  }
}

const linkedList = new LinkedList<number>();

linkedList.prepend(1);

linkedList.print();
