import Logger from "../lib/Logger";

class ListNode<T = any> {
  public value: T;
  public next: ListNode<T> | null;

  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}

export default class DoublyLinkedList<T = any> {
  private readonly logger = new Logger();

  private readonly head: ListNode<T> | null = null;

  constructor() {
    this.logger.log("DoublyLinkedList created" + this.head);
  }
}
