import Stack from "../../src/dataStructures/Stack";
import Logger from "../../src/lib/Logger";

describe("Stack", () => {
  let stack: Stack<number>;

  beforeEach(() => {
    stack = new Stack<number>();
  });

  it("should push and pop elements correctly", () => {
    stack.push(1);
    stack.push(2);
    stack.push(3);

    expect(stack.pop()).toBe(3);
    expect(stack.pop()).toBe(2);
    expect(stack.pop()).toBe(1);
    expect(stack.pop()).toBeNull();
  });

  it("should return the correct peak element", () => {
    stack.push(1);
    stack.push(2);
    stack.push(3);

    expect(stack.peak()).toBe(3);
    stack.pop();
    expect(stack.peak()).toBe(2);
  });

  it("should return true when stack is empty", () => {
    expect(stack.isEmpty()).toBe(true);
    stack.push(1);
    expect(stack.isEmpty()).toBe(false);
  });

  it("should return the correct size of the stack", () => {
    expect(stack.size()).toBe(0);
    stack.push(1);
    stack.push(2);
    expect(stack.size()).toBe(2);
  });

  it("should clear the stack", () => {
    stack.push(1);
    stack.push(2);
    stack.clear();
    expect(stack.isEmpty()).toBe(true);
    expect(stack.size()).toBe(0);
  });

  it("should print the stack", () => {
    stack.push(1);
    stack.push(2);

    const spy = jest
      .spyOn(Logger.prototype, "info")
      .mockImplementation(() => {});

    stack.print();
    expect(spy).toHaveBeenCalledWith([1, 2]);
    spy.mockRestore();
  });
});
