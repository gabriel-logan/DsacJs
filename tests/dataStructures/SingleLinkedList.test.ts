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
      list.addFirst(1);
      expect(list.isEmpty()).toBe(false);
    });
  });

  describe("AddFirst", () => {
    it("should addFirst a new node to an empty list", () => {
      const list = new SingleLinkedList();
      list.addFirst(1);
      expect(list.head?.value).toBe(1);
      expect(list.tail?.value).toBe(1);

      expect(list.size).toBe(1);
      expect(list.head?.next).toBe(null);
      expect(list.tail?.next).toBe(null);
    });

    it("should addFirst a new node to a non-empty list", () => {
      const list = new SingleLinkedList();
      list.addFirst(1);
      list.addFirst(2);
      expect(list.head?.value).toBe(2);
      expect(list.tail?.value).toBe(1);

      expect(list.size).toBe(2);
      expect(list.head?.next?.value).toBe(1);
      expect(list.tail?.next).toBe(null);
    });
  });

  describe("AddLast", () => {
    it("should addLast a new node to an empty list", () => {
      const list = new SingleLinkedList();
      list.addLast(1);
      expect(list.head?.value).toBe(1);
      expect(list.tail?.value).toBe(1);

      expect(list.size).toBe(1);
      expect(list.head?.next).toBe(null);
      expect(list.tail?.next).toBe(null);
    });

    it("should addLast a new node to a non-empty list", () => {
      const list = new SingleLinkedList();
      list.addLast(1);
      list.addLast(2);
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
      list.addFirst(1);
      list.addFirst(2);
      list.addFirst(3);

      const spyLogger = jest
        .spyOn(Logger.prototype, "info")
        .mockImplementation(() => {});

      list.print();

      expect(spyLogger).toHaveBeenCalledTimes(1);
      expect(spyLogger).toHaveBeenCalledWith([3, 2, 1]);
    });
  });

  describe("PrintReverse", () => {
    it("should print an empty list", () => {
      const list = new SingleLinkedList();
      const spyLogger = jest
        .spyOn(Logger.prototype, "info")
        .mockImplementation(() => {});

      list.printReverse();

      expect(spyLogger).toHaveBeenCalledTimes(1);
    });

    it("should print the list in reverse", () => {
      const list = new SingleLinkedList();
      list.addFirst(1);
      list.addFirst(2);
      list.addFirst(3);

      const spyLogger = jest
        .spyOn(Logger.prototype, "info")
        .mockImplementation(() => {});

      list.printReverse();

      expect(spyLogger).toHaveBeenCalledTimes(1);
      expect(spyLogger).toHaveBeenCalledWith([1, 2, 3]);
    });
  });

  describe("add At", () => {
    it("should add a new node at the beginning of the list", () => {
      const list = new SingleLinkedList<number>();
      list.add(0, 1);
      expect(list.head?.value).toBe(1);
      expect(list.tail?.value).toBe(1);

      expect(list.size).toBe(1);
      expect(list.head?.next).toBe(null);
      expect(list.tail?.next).toBe(null);
    });

    it("should add a new node at the end of the list", () => {
      const list = new SingleLinkedList<number>();
      list.add(0, 1);
      list.add(1, 2);
      expect(list.head?.value).toBe(1);
      expect(list.tail?.value).toBe(2);

      expect(list.size).toBe(2);
      expect(list.head?.next?.value).toBe(2);
      expect(list.tail?.next).toBe(null);
    });

    it("should add a new node in the middle of the list", () => {
      const list = new SingleLinkedList<number>();
      list.add(0, 1);
      list.add(1, 2);
      list.add(1, 3);
      expect(list.head?.value).toBe(1);
      expect(list.tail?.value).toBe(2);

      expect(list.size).toBe(3);
      expect(list.head?.next?.value).toBe(3);
      expect(list.tail?.next).toBe(null);
    });

    it("should throw an error if the index is out of bounds", () => {
      const list = new SingleLinkedList<number>();
      expect(() => list.add(1, 1)).toThrow("Index out of bounds");
    });

    test("newNode.next should point to null if current?.next is undefined", () => {
      const list = new SingleLinkedList<number>();
      list.add(0, 1);
      list.add(1, 2);

      if (list.head) {
        list.head.next = null;
      }

      list.add(1, 3);

      expect(list.head?.value).toBe(1);
    });
  });
  describe("add", () => {
    it("should add a new node at the end of the list", () => {
      const list = new SingleLinkedList<number>();
      list.add(1);
      expect(list.head?.value).toBe(1);
      expect(list.tail?.value).toBe(1);

      expect(list.size).toBe(1);
      expect(list.head?.next).toBe(null);
      expect(list.tail?.next).toBe(null);
    });

    it("should add a new node at the end of the list", () => {
      const list = new SingleLinkedList<number>();
      list.add(1);
      list.add(2);
      expect(list.head?.value).toBe(1);
      expect(list.tail?.value).toBe(2);

      expect(list.size).toBe(2);
      expect(list.head?.next?.value).toBe(2);
      expect(list.tail?.next).toBe(null);
    });

    it("should add a new node at the end of the list", () => {
      const list = new SingleLinkedList<number>();
      list.add(1);
      list.add(2);
      list.add(3);
      expect(list.head?.value).toBe(1);
      expect(list.tail?.value).toBe(3);

      expect(list.size).toBe(3);
      expect(list.head?.next?.value).toBe(2);
      expect(list.tail?.next).toBe(null);
    });
  });

  describe("Remove At", () => {
    it("should remove a node from the beginning of the list", () => {
      const list = new SingleLinkedList<number>();
      list.add(1);
      list.add(2);
      list.add(3);

      expect(list.removeAt(0)).toBe(1);
      expect(list.size).toBe(2);
      expect(list.head?.value).toBe(2);
      expect(list.tail?.value).toBe(3);
      expect(list.head?.next?.value).toBe(3);
      expect(list.tail?.next).toBe(null);
    });

    it("should remove a node from the end of the list", () => {
      const list = new SingleLinkedList<number>();
      list.add(1);
      list.add(2);
      list.add(3);

      expect(list.removeAt(2)).toBe(3);
      expect(list.size).toBe(2);
      expect(list.head?.value).toBe(1);
      expect(list.tail?.value).toBe(2);
      expect(list.head?.next?.value).toBe(2);
      expect(list.tail?.next).toBe(null);
    });

    it("should remove a node from the middle of the list", () => {
      const list = new SingleLinkedList<number>();
      list.add(1);
      list.add(2);
      list.add(3);

      expect(list.removeAt(1)).toBe(2);
      expect(list.size).toBe(2);
      expect(list.head?.value).toBe(1);
      expect(list.tail?.value).toBe(3);
      expect(list.head?.next?.value).toBe(3);
      expect(list.tail?.next).toBe(null);
    });

    it("should return null index < 0 or index >= size", () => {
      const list = new SingleLinkedList<number>();
      expect(list.removeAt(-1)).toBe(null);
      expect(list.removeAt(0)).toBe(null);
    });

    it("should return null if current?.value is undefined", () => {
      const list = new SingleLinkedList<number>();
      list.add(1);
      list.add(2);
      list.add(3);
      list.head = null;
      expect(list.removeAt(1)).toBe(null);
    });

    test("previous.next should point to null if current?.next is undefined", () => {
      const list = new SingleLinkedList<number>();
      list.add(1);
      list.add(2);
      list.add(3);

      if (list.head) {
        list.head.next = null;
      }

      expect(list.removeAt(1)).toBe(null);
      expect(list.head?.value).toBe(1);
      expect(list.tail?.value).toBe(3);
      expect(list.head?.next?.value).toBe(undefined);
      expect(list.tail?.next).toBe(null);
    });
  });

  describe("Remove", () => {
    it("should remove the first occurrence of a value", () => {
      const list = new SingleLinkedList<number>();
      list.add(1);
      list.add(2);
      list.add(3);

      expect(list.remove(2)).toBe(true);
      expect(list.size).toBe(2);
      expect(list.head?.value).toBe(1);
      expect(list.tail?.value).toBe(3);
      expect(list.head?.next?.value).toBe(3);
      expect(list.tail?.next).toBe(null);
    });

    it("should return false if the value is not in the list", () => {
      const list = new SingleLinkedList<number>();
      list.add(1);
      list.add(2);
      list.add(3);

      expect(list.remove(4)).toBe(false);
      expect(list.size).toBe(3);
      expect(list.head?.value).toBe(1);
      expect(list.tail?.value).toBe(3);
      expect(list.head?.next?.value).toBe(2);
      expect(list.tail?.next).toBe(null);
    });

    it("head should point tu current.next if previous is null", () => {
      const list = new SingleLinkedList<number>();
      list.add(1);
      list.add(2);
      list.add(3);

      expect(list.remove(1)).toBe(true);
      expect(list.size).toBe(2);
      expect(list.head?.value).toBe(2);
      expect(list.tail?.value).toBe(3);
      expect(list.head?.next?.value).toBe(3);
      expect(list.tail?.next).toBe(null);
    });
  });

  describe("RemoveFirst", () => {
    it("should return null if the list is empty", () => {
      const list = new SingleLinkedList();
      expect(list.removeFirst()).toBe(null);
    });

    it("should remove the first node from the list", () => {
      const list = new SingleLinkedList();
      list.addFirst(1);
      list.addFirst(2);
      list.addFirst(3);

      expect(list.removeFirst()).toBe(3);

      expect(list.size).toBe(2);
      expect(list.head?.value).toBe(2);
      expect(list.tail?.value).toBe(1);
      expect(list.head?.next?.value).toBe(1);
      expect(list.tail?.next).toBe(null);
    });

    it("should remove the first node from a list with one node", () => {
      const list = new SingleLinkedList();
      list.addFirst(1);

      expect(list.removeFirst()).toBe(1);
      expect(list.size).toBe(0);
      expect(list.head).toBe(null);
      expect(list.tail).toBe(null);
    });

    it("should return null if current?.value is undefined", () => {
      const list = new SingleLinkedList<number>();
      list.add(1);
      list.add(2);
      list.add(3);
      list.head = null;
      expect(list.removeFirst()).toBe(null);
    });
  });

  describe("RemoveLast", () => {
    it("should return null if the list is empty", () => {
      const list = new SingleLinkedList();
      expect(list.removeLast()).toBe(null);
    });

    it("should remove the last node from the list", () => {
      const list = new SingleLinkedList();
      list.addFirst(1);
      list.addFirst(2);
      list.addFirst(3);

      expect(list.removeLast()).toBe(1);

      expect(list.tail?.value).toBe(2);
      expect(list.head?.value).toBe(3);

      expect(list.size).toBe(2);
      expect(list.head?.next?.value).toBe(2);
      expect(list.tail?.next).toBe(null);
    });

    it("should remove the last node from a list with one node", () => {
      const list = new SingleLinkedList();
      list.addFirst(1);

      expect(list.removeLast()).toBe(1);

      expect(list.size).toBe(0);
      expect(list.tail).toBe(null);
      expect(list.head).toBe(null);
    });

    it("should return null if current?.value is undefined", () => {
      const list = new SingleLinkedList<number>();
      list.add(1);
      list.add(2);
      list.add(3);
      list.head = null;
      expect(list.removeLast()).toBe(null);
    });

    it("should return null when size === 1 and head?.value is undefined", () => {
      const list = new SingleLinkedList<number>();
      list.add(1);
      list.head = null;
      expect(list.removeLast()).toBe(null);
    });
  });

  describe("Contains", () => {});

  describe("Sort", () => {});

  describe("Clear", () => {
    it("should clear an empty list", () => {
      const list = new SingleLinkedList();
      list.clear();
      expect(list.size).toBe(0);
    });

    it("should clear a non-empty list", () => {
      const list = new SingleLinkedList();
      list.addFirst(1);
      list.addFirst(2);
      list.addFirst(3);

      list.clear();
      expect(list.size).toBe(0);
      expect(list.head).toBe(null);
      expect(list.tail).toBe(null);
    });
  });

  describe("Peek", () => {
    it("should return null if the list is empty", () => {
      const list = new SingleLinkedList();
      expect(list.peek()).toBe(null);
    });

    it("should return the first node of the list", () => {
      const list = new SingleLinkedList();
      list.addFirst(1);
      list.addFirst(2);
      list.addFirst(3);

      expect(list.peek()).toBe(3);
    });
  });

  describe("Get", () => {});

  describe("IndexOf", () => {
    it("should return -1 if the list is empty", () => {
      const list = new SingleLinkedList();
      expect(list.indexOf(1)).toBe(-1);
    });

    it("should return -1 if the value is not in the list", () => {
      const list = new SingleLinkedList();
      list.addFirst(1);
      list.addFirst(2);
      list.addFirst(3);

      expect(list.indexOf(4)).toBe(-1);
    });

    it("should return the index of the value in the list", () => {
      const list = new SingleLinkedList();
      list.addFirst(1);
      list.addFirst(2);
      list.addFirst(3);

      expect(list.indexOf(2)).toBe(1);
    });
  });

  describe("Iterator", () => {});

  describe("ToArray", () => {
    it("should return an empty array if the list is empty", () => {
      const list = new SingleLinkedList();
      expect(list.toArray()).toEqual([]);
    });

    it("should return an array with the values of the list", () => {
      const list = new SingleLinkedList();
      list.addFirst(1);
      list.addFirst(2);
      list.addFirst(3);

      expect(list.toArray()).toEqual([3, 2, 1]);
    });
  });

  describe("Poll", () => {
    it("should return null if the list is empty", () => {
      const list = new SingleLinkedList();
      expect(list.poll()).toBe(null);
    });

    it("should return the first node of the list", () => {
      const list = new SingleLinkedList();
      list.addFirst(1);
      list.addFirst(2);
      list.addFirst(3);

      expect(list.poll()).toBe(3);

      expect(list.size).toBe(2);
      expect(list.head?.value).toBe(2);
      expect(list.tail?.value).toBe(1);
      expect(list.head?.next?.value).toBe(1);
      expect(list.tail?.next).toBe(null);
    });
  });

  describe("GetFirst", () => {
    it("should return null if the list is empty", () => {
      const list = new SingleLinkedList();
      expect(list.getFirst()).toBe(null);
    });

    it("should return the first node of the list", () => {
      const list = new SingleLinkedList();
      list.addFirst(1);
      list.addFirst(2);
      list.addFirst(3);

      expect(list.getFirst()).toBe(3);
    });
  });

  describe("GetLast", () => {
    it("should return null if the list is empty", () => {
      const list = new SingleLinkedList();
      expect(list.getLast()).toBe(null);
    });

    it("should return the last node of the list", () => {
      const list = new SingleLinkedList();
      list.addFirst(1);
      list.addFirst(2);
      list.addFirst(3);

      expect(list.getLast()).toBe(1);
    });
  });
});
