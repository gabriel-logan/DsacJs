import { LinkedList } from "../../src";
import Logger from "../../src/lib/Logger";

describe("LinkedList", () => {
  describe("IsEmpty", () => {
    it("should return true if the list is empty", () => {
      const list = new LinkedList();
      expect(list.isEmpty()).toBe(true);
    });

    it("should return false if the list is not empty", () => {
      const list = new LinkedList();
      list.prepend(1);
      expect(list.isEmpty()).toBe(false);
    });
  });

  describe("Prepend", () => {
    it("should prepend a new node to an empty list", () => {
      const list = new LinkedList();
      list.prepend(1);
      expect(list.head?.value).toBe(1);
      expect(list.tail?.value).toBe(1);
      expect(list.size).toBe(1);
    });

    it("should prepend a new node to a non-empty list", () => {
      const list = new LinkedList();
      list.prepend(1);
      list.prepend(2);
      expect(list.head?.value).toBe(2);
      expect(list.tail?.value).toBe(1);
      expect(list.size).toBe(2);
    });
  });

  describe("Append", () => {
    it("should append a new node to an empty list", () => {
      const list = new LinkedList();
      list.append(1);
      expect(list.head?.value).toBe(1);
      expect(list.tail?.value).toBe(1);
      expect(list.size).toBe(1);
    });

    it("should append a new node to a non-empty list", () => {
      const list = new LinkedList();
      list.append(1);
      list.append(2);
      expect(list.head?.value).toBe(1);
      expect(list.tail?.value).toBe(2);
      expect(list.size).toBe(2);
    });
  });

  describe("Print", () => {
    it("should print an empty list", () => {
      const list = new LinkedList();
      const spyLogger = jest
        .spyOn(Logger.prototype, "info")
        .mockImplementation(() => {});

      list.print();

      expect(spyLogger).toHaveBeenCalledTimes(1);
    });
    it("should print the list", () => {
      const list = new LinkedList();
      list.prepend(1);
      list.prepend(2);
      list.prepend(3);

      const spyLogger = jest
        .spyOn(Logger.prototype, "info")
        .mockImplementation(() => {});

      list.print();

      expect(spyLogger).toHaveBeenCalledTimes(1);
      expect(spyLogger).toHaveBeenCalledWith("3 -> 2 -> 1 -> null");
    });
  });

  describe("InsertAt", () => {});

  describe("RemoveAt", () => {});

  describe("RemoveValue", () => {});

  describe("RemoveLast", () => {});

  describe("RemoveFirst", () => {});

  describe("Search", () => {});

  describe("Reverse", () => {});

  describe("Sort", () => {});
});
