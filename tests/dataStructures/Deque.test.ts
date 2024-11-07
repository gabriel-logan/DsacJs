import { Logger } from "../../src";
import Deque from "../../src/dataStructures/Deque";

describe("Deque", () => {
  let deque: Deque<number>;

  beforeEach(() => {
    deque = new Deque<number>();
  });

  test("should be empty when initialized", () => {
    expect(deque.isEmpty()).toBe(true);
    expect(deque.size()).toBe(0);
  });

  test("should add elements to the front", () => {
    deque.pushFront(1);
    deque.pushFront(2);
    expect(deque.peekFront()).toBe(2);
    expect(deque.peekBack()).toBe(1);
    expect(deque.size()).toBe(2);
  });

  test("should add elements to the back", () => {
    deque.pushBack(1);
    deque.pushBack(2);
    expect(deque.peekFront()).toBe(1);
    expect(deque.peekBack()).toBe(2);
    expect(deque.size()).toBe(2);
  });

  test("should remove elements from the front", () => {
    deque.pushFront(1);
    deque.pushFront(2);
    expect(deque.popFront()).toBe(2);
    expect(deque.popFront()).toBe(1);
    expect(deque.isEmpty()).toBe(true);
  });

  test("should remove elements from the back", () => {
    deque.pushBack(1);
    deque.pushBack(2);
    expect(deque.popBack()).toBe(2);
    expect(deque.popBack()).toBe(1);
    expect(deque.isEmpty()).toBe(true);
  });

  test("should clear the deque", () => {
    deque.pushBack(1);
    deque.pushBack(2);
    deque.clear();
    expect(deque.isEmpty()).toBe(true);
    expect(deque.size()).toBe(0);
  });

  test("should convert to array", () => {
    deque.pushBack(1);
    deque.pushBack(2);
    expect(deque.toArray()).toEqual([1, 2]);
  });

  test("should iterate over elements", () => {
    deque.pushBack(1);
    deque.pushBack(2);
    const result = [];
    for (const value of deque) {
      result.push(value);
    }
    expect(result).toEqual([1, 2]);
  });

  it("should print", () => {
    const spy = jest
      .spyOn(Logger.prototype, "info")
      .mockImplementation(() => {});

    deque.pushBack(1);
    deque.pushBack(2);

    deque.print();

    expect(spy).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledWith([1, 2]);
    spy.mockRestore();
  });
});
