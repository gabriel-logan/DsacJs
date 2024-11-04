import { LinkedList } from "../../src";
import Logger from "../../src/lib/Logger";

describe("LinkedList", () => {
  it("should add a new node to the list", () => {
    const list = new LinkedList<number>();
    list.add(1);

    expect(list.size()).toBe(1);
  });

  it("should print the list", () => {
    const spyLog = jest
      .spyOn(Logger.prototype, "log")
      .mockImplementation(() => {});

    const list = new LinkedList<number>();

    list.add(1);
    list.add(2);
    list.add(3);

    list.print();

    expect(spyLog).toHaveBeenCalledTimes(3);
  });
});
