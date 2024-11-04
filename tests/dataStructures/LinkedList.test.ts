import { LinkedList } from "../../src";

describe("LinkedList", () => {
  it("should add a new node to the list", () => {
    const list = new LinkedList<number>();
    list.add(1);

    expect(list.size()).toBe(1);
  });
});
