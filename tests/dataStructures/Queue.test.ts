import Queue from "../../src/dataStructures/Queue";
import Logger from "../../src/lib/Logger";

describe("Queue", () => {
  let queue: Queue<number>;

  beforeEach(() => {
    queue = new Queue<number>();
  });

  it("should enqueue elements", () => {
    queue.enqueue(1);
    queue.enqueue(2);
    expect(queue.size()).toBe(2);
  });

  it("should dequeue elements", () => {
    queue.enqueue(1);
    queue.enqueue(2);
    expect(queue.dequeue()).toBe(1);
    expect(queue.size()).toBe(1);
  });

  it("should peek the first element", () => {
    queue.enqueue(1);
    queue.enqueue(2);
    expect(queue.peek()).toBe(1);
  });

  it("should return null when peeking an empty queue", () => {
    expect(queue.peek()).toBeNull();
  });

  it("should return true when the queue is empty", () => {
    expect(queue.isEmpty()).toBe(true);
  });

  it("should return false when the queue is not empty", () => {
    queue.enqueue(1);
    expect(queue.isEmpty()).toBe(false);
  });

  it("should clear the queue", () => {
    queue.enqueue(1);
    queue.enqueue(2);
    queue.clear();
    expect(queue.size()).toBe(0);
    expect(queue.isEmpty()).toBe(true);
  });

  it("should print the queue", () => {
    queue.enqueue(1);
    queue.enqueue(2);

    const spy = jest
      .spyOn(Logger.prototype, "info")
      .mockImplementation(() => {});

    queue.print();

    expect(spy).toHaveBeenCalledWith([1, 2]);
  });
});
