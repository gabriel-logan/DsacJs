import { SingleLinkedList } from "../../src";
import Logger from "../../src/lib/Logger";

describe("SingleLinkedList", () => {
  describe("IsEmpty", () => {
    it("should return true if the list is empty", () => {
      const list = new SingleLinkedList();
      expect(list.isEmpty()).toBe(true);
    });

    it("should return false if the list is not empty", () => {
      const list = new SingleLinkedList();
      list.prepend(1);
      expect(list.isEmpty()).toBe(false);
    });
  });

  describe("Prepend", () => {
    it("should prepend a new node to an empty list", () => {
      const list = new SingleLinkedList();
      list.prepend(1);
      expect(list.head?.value).toBe(1);
      expect(list.tail?.value).toBe(1);

      expect(list.size).toBe(1);
      expect(list.head?.next).toBe(null);
      expect(list.tail?.next).toBe(null);
    });

    it("should prepend a new node to a non-empty list", () => {
      const list = new SingleLinkedList();
      list.prepend(1);
      list.prepend(2);
      expect(list.head?.value).toBe(2);
      expect(list.tail?.value).toBe(1);

      expect(list.size).toBe(2);
      expect(list.head?.next?.value).toBe(1);
      expect(list.tail?.next).toBe(null);
    });
  });

  describe("Append", () => {
    it("should append a new node to an empty list", () => {
      const list = new SingleLinkedList();
      list.append(1);
      expect(list.head?.value).toBe(1);
      expect(list.tail?.value).toBe(1);

      expect(list.size).toBe(1);
      expect(list.head?.next).toBe(null);
      expect(list.tail?.next).toBe(null);
    });

    it("should append a new node to a non-empty list", () => {
      const list = new SingleLinkedList();
      list.append(1);
      list.append(2);
      expect(list.head?.value).toBe(1);
      expect(list.tail?.value).toBe(2);

      expect(list.size).toBe(2);
      expect(list.head?.next?.value).toBe(2);
      expect(list.tail?.next).toBe(null);
    });
  });

  describe("Print", () => {
    it("should print an empty list", () => {
      const list = new SingleLinkedList();
      const spyLogger = jest
        .spyOn(Logger.prototype, "info")
        .mockImplementation(() => {});

      list.print();

      expect(spyLogger).toHaveBeenCalledTimes(1);
    });
    it("should print the list", () => {
      const list = new SingleLinkedList();
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

  describe("RemoveLast", () => {
    it("should return null if the list is empty", () => {
      const list = new SingleLinkedList();
      expect(list.removeLast()).toBe(null);
    });

    it("should remove the last node from the list", () => {
      const list = new SingleLinkedList();
      list.prepend(1);
      list.prepend(2);
      list.prepend(3);

      expect(list.removeLast()).toBe(1);

      expect(list.tail?.value).toBe(2);
      expect(list.head?.value).toBe(3);

      expect(list.size).toBe(2);
      expect(list.head?.next?.value).toBe(2);
      expect(list.tail?.next).toBe(null);
    });

    it("should remove the last node from a list with one node", () => {
      const list = new SingleLinkedList();
      list.prepend(1);

      expect(list.removeLast()).toBe(1);

      expect(list.size).toBe(0);
      expect(list.tail).toBe(null);
      expect(list.head).toBe(null);
    });
  });

  describe("RemoveFirst", () => {
    it("should return null if the list is empty", () => {
      const list = new SingleLinkedList();
      expect(list.removeFirst()).toBe(null);
    });

    it("should remove the first node from the list", () => {
      const list = new SingleLinkedList();
      list.prepend(1);
      list.prepend(2);
      list.prepend(3);

      expect(list.removeFirst()).toBe(3);

      expect(list.size).toBe(2);
      expect(list.head?.value).toBe(2);
      expect(list.tail?.value).toBe(1);
      expect(list.head?.next?.value).toBe(1);
      expect(list.tail?.next).toBe(null);
    });

    it("should remove the first node from a list with one node", () => {
      const list = new SingleLinkedList();
      list.prepend(1);

      expect(list.removeFirst()).toBe(1);
      expect(list.size).toBe(0);
      expect(list.head).toBe(null);
      expect(list.tail).toBe(null);
    });
  });

  describe("Search", () => {});

  describe("Reverse", () => {});

  describe("Sort", () => {});
});
