class ListNode<T = any> {
  public data: T | undefined;
  public next: ListNode<T> | null;

  constructor(data?: T, next?: ListNode<T> | null) {
    this.data = data;
    this.next = next || null;
  }
}

export default class LinkedList<T = any> {
  private head: ListNode<T> | null = null;

  add(data: T): void {
    if (!this.head) {
      this.head = new ListNode(data);
      return;
    }

    let current = this.head;
    while (current.next) {
      current = current.next;
    }

    current.next = new ListNode(data);
  }

  size(): number {
    let count = 0;
    let current = this.head;
    while (current) {
      count++;
      current = current.next;
    }

    return count;
  }

  print(): void {
    let current = this.head;
    while (current) {
      // eslint-disable-next-line no-console
      console.log(current.data);
      current = current.next;
    }
  }
}
