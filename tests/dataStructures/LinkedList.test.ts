import { LinkedList } from "../../src";

describe("LinkedList", () => {
  it("should add a new node to the list", () => {
    const list = new LinkedList<number>();
    list.add(1);

    expect(list.size()).toBe(1);
  });

  it("should print the list", () => {
    const spyConsoleLog = jest
      .spyOn(console, "log")
      .mockImplementation(() => {});

    const list = new LinkedList<number>();

    list.add(1);
    list.add(2);
    list.add(3);

    list.print();

    expect(spyConsoleLog).toHaveBeenCalledTimes(3);
  });
});
