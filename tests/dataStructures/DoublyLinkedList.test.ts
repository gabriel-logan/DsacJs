import { Logger } from "../../src";
import DoublyLinkedList from "../../src/dataStructures/DoublyLinkedList";

describe("DoublyLinkedList", () => {
  describe("IsEmpty", () => {
    it("should return true if the list is empty", () => {
      const list = new DoublyLinkedList();
      expect(list.isEmpty()).toBe(true);
    });

    it("should return false if the list is not empty", () => {});
  });

  describe("AddFirst", () => {
    it("should add a new node to the beginning of the list", () => {
      const list = new DoublyLinkedList();
      list.addFirst(1);
      expect(list.size).toBe(1);
      expect(list.head?.value).toBe(1);
      expect(list.tail?.value).toBe(1);
      expect(list.head?.next).toBeNull();
      expect(list.head?.prev).toBeNull();
      expect(list.tail?.next).toBeNull();
      expect(list.tail?.prev).toBeNull();
    });

    it("should add multiple nodes to the beginning of the list", () => {
      const list = new DoublyLinkedList();
      list.addFirst(1);
      list.addFirst(2);
      list.addFirst(3);
      expect(list.size).toBe(3);
      expect(list.head?.value).toBe(3);
      expect(list.tail?.value).toBe(1);
      expect(list.head?.next?.value).toBe(2);
      expect(list.head?.prev).toBeNull();
      expect(list.tail?.next).toBeNull();
      expect(list.tail?.prev?.value).toBe(2);
    });
  });

  describe("AddLast", () => {
    it("should add a new node to the end of the list", () => {
      const list = new DoublyLinkedList();
      list.addLast(1);
      expect(list.size).toBe(1);
      expect(list.head?.value).toBe(1);
      expect(list.tail?.value).toBe(1);
      expect(list.head?.next).toBeNull();
      expect(list.head?.prev).toBeNull();
      expect(list.tail?.next).toBeNull();
      expect(list.tail?.prev).toBeNull();
    });

    it("should add multiple nodes to the end of the list", () => {
      const list = new DoublyLinkedList();
      list.addLast(1);
      list.addLast(2);
      list.addLast(3);
      expect(list.size).toBe(3);
      expect(list.head?.value).toBe(1);
      expect(list.tail?.value).toBe(3);
      expect(list.head?.next?.value).toBe(2);
      expect(list.head?.prev).toBeNull();
      expect(list.tail?.next).toBeNull();
      expect(list.tail?.prev?.value).toBe(2);
    });
  });

  describe("Print", () => {
    it("should return an empty string if the list is empty", () => {
      const list = new DoublyLinkedList();

      const spyLogger = jest
        .spyOn(Logger.prototype, "info")
        .mockImplementation(() => {});

      list.print();

      expect(spyLogger).toHaveBeenCalledWith("List is empty");
    });

    it("should print the list", () => {
      const list = new DoublyLinkedList();
      list.addFirst(1);
      list.addFirst(2);
      list.addFirst(3);

      const spyLogger = jest
        .spyOn(Logger.prototype, "info")
        .mockImplementation(() => {});

      list.print();

      expect(spyLogger).toHaveBeenCalledWith([3, 2, 1]);
    });
  });

  describe("PrintReverse", () => {
    it("should return an empty string if the list is empty", () => {
      const list = new DoublyLinkedList();

      const spyLogger = jest
        .spyOn(Logger.prototype, "info")
        .mockImplementation(() => {});

      list.printReverse();

      expect(spyLogger).toHaveBeenCalledWith("List is empty");
    });

    it("should print the list in reverse", () => {
      const list = new DoublyLinkedList();
      list.addFirst(1);
      list.addFirst(2);
      list.addFirst(3);

      const spyLogger = jest
        .spyOn(Logger.prototype, "info")
        .mockImplementation(() => {});

      list.printReverse();

      expect(spyLogger).toHaveBeenCalledWith([1, 2, 3]);
    });
  });

  describe("add At", () => {});
  describe("add", () => {});

  describe("Remove At", () => {});

  describe("Remove", () => {});

  describe("RemoveFirst", () => {});

  describe("RemoveLast", () => {});

  describe("Contains", () => {});

  describe("Sort", () => {});

  describe("Clear", () => {});

  describe("Peek", () => {});

  describe("Get", () => {});

  describe("IndexOf", () => {});

  describe("Iterator", () => {});

  describe("ToArray", () => {});

  describe("Poll", () => {});

  describe("GetFirst", () => {});

  describe("GetLast", () => {});
});
