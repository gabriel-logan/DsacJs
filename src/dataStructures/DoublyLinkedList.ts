import Logger from "../lib/Logger";

class ListNode<T = any> {
  public value: T;
  public next: ListNode<T> | null;
  public prev: ListNode<T> | null;

  constructor(value: T) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

export default class DoublyLinkedList<T = any> {
  private readonly logger = new Logger();

  public readonly head: ListNode<T> | null = null;
  public readonly tail: ListNode<T> | null = null;
  public size: number = 0;

  constructor() {
    this.logger.log(
      "DoublyLinkedList created" +
        this.head +
        this.tail +
        this.head?.next +
        this.tail?.prev,
    );
  }

  isEmpty(): boolean {
    return this.size === 0;
  }
}
