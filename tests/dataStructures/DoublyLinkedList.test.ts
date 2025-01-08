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

  describe("add At", () => {
    it("should add a new node at a given index", () => {
      const list = new DoublyLinkedList();
      list.add(0, 1);
      expect(list.size).toBe(1);
      expect(list.head?.value).toBe(1);
      expect(list.tail?.value).toBe(1);

      expect(list.head?.next).toBeNull();
      expect(list.head?.prev).toBeNull();
      expect(list.tail?.next).toBeNull();
      expect(list.tail?.prev).toBeNull();
    });

    it("should add a new node at the beginning of the list", () => {
      const list = new DoublyLinkedList();
      list.add(0, 1);
      list.add(0, 2);
      expect(list.size).toBe(2);
      expect(list.head?.value).toBe(2);
      expect(list.tail?.value).toBe(1);

      expect(list.head?.next?.value).toBe(1);
      expect(list.head?.prev).toBeNull();
      expect(list.tail?.next).toBeNull();
      expect(list.tail?.prev?.value).toBe(2);
    });

    it("should add a new node at the end of the list", () => {
      const list = new DoublyLinkedList();
      list.add(0, 1);
      list.add(1, 2);
      expect(list.size).toBe(2);
      expect(list.head?.value).toBe(1);
      expect(list.tail?.value).toBe(2);

      expect(list.head?.next?.value).toBe(2);
      expect(list.head?.prev).toBeNull();
      expect(list.tail?.next).toBeNull();
      expect(list.tail?.prev?.value).toBe(1);
    });

    it("should add a new node at a given index", () => {
      const list = new DoublyLinkedList();
      list.add(0, 1);
      list.add(1, 2);
      list.add(1, 3);
      expect(list.size).toBe(3);
      expect(list.head?.value).toBe(1);
      expect(list.tail?.value).toBe(2);

      expect(list.head?.next?.value).toBe(3);
      expect(list.head?.prev).toBeNull();
      expect(list.tail?.next).toBeNull();
      expect(list.tail?.prev?.value).toBe(3);
    });

    it("should throw an error if the index is out of bounds", () => {
      const list = new DoublyLinkedList();
      expect(() => list.add(1, 1)).toThrow("Index out of bounds");
    });
  });
  describe("add", () => {
    it("should add a new node at the end of the list", () => {
      const list = new DoublyLinkedList();
      list.add(1);
      expect(list.size).toBe(1);
      expect(list.head?.value).toBe(1);
      expect(list.tail?.value).toBe(1);

      expect(list.head?.next).toBeNull();
      expect(list.head?.prev).toBeNull();
      expect(list.tail?.next).toBeNull();
      expect(list.tail?.prev).toBeNull();
    });

    it("should add a new node at the end of the list", () => {
      const list = new DoublyLinkedList();
      list.add(1);
      list.add(2);
      expect(list.size).toBe(2);
      expect(list.head?.value).toBe(1);
      expect(list.tail?.value).toBe(2);

      expect(list.head?.next?.value).toBe(2);
      expect(list.head?.prev).toBeNull();
      expect(list.tail?.next).toBeNull();
      expect(list.tail?.prev?.value).toBe(1);
    });
  });

  describe("Remove At", () => {
    it("should removeAt a node at a given index", () => {
      const list = new DoublyLinkedList();
      list.add(1);
      list.removeAt(0);
      expect(list.size).toBe(0);
      expect(list.head).toBeNull();
      expect(list.tail).toBeNull();

      expect(list.head?.next ?? null).toBeNull();
      expect(list.head?.prev ?? null).toBeNull();
      expect(list.tail?.next ?? null).toBeNull();
      expect(list.tail?.prev ?? null).toBeNull();
    });

    it("should removeAt a node at the beginning of the list", () => {
      const list = new DoublyLinkedList();
      list.add(1);
      list.add(2);
      list.removeAt(0);
      expect(list.size).toBe(1);
      expect(list.head?.value).toBe(2);
      expect(list.tail?.value).toBe(2);

      expect(list.head?.next).toBeNull();
      expect(list.head?.prev).toBeNull();
      expect(list.tail?.next).toBeNull();
      expect(list.tail?.prev).toBeNull();
    });

    it("should removeAt a node at the end of the list", () => {
      const list = new DoublyLinkedList();
      list.add(1);
      list.add(2);
      list.removeAt(1);
      expect(list.size).toBe(1);
      expect(list.head?.value).toBe(1);
      expect(list.tail?.value).toBe(1);

      expect(list.head?.next).toBeNull();
      expect(list.head?.prev).toBeNull();
      expect(list.tail?.next).toBeNull();
      expect(list.tail?.prev).toBeNull();
    });

    it("should removeAt a node at a given index", () => {
      const list = new DoublyLinkedList();
      list.add(1);
      list.add(2);
      list.add(3);
      list.removeAt(1);
      expect(list.size).toBe(2);
      expect(list.head?.value).toBe(1);
      expect(list.tail?.value).toBe(3);

      expect(list.head?.next?.value).toBe(3);
      expect(list.head?.prev).toBeNull();
      expect(list.tail?.next).toBeNull();
      expect(list.tail?.prev?.value).toBe(1);
    });

    it("should return null if the index is out of bounds", () => {
      const list = new DoublyLinkedList();
      list.add(1);
      expect(list.removeAt(1)).toBeNull();

      const list2 = new DoublyLinkedList();
      expect(list2.removeAt(-1)).toBeNull();
    });

    it("should return null if the list is empty", () => {
      const list = new DoublyLinkedList();
      expect(list.removeAt(0)).toBeNull();

      expect(list.head?.next ?? null).toBeNull();
      expect(list.head?.prev ?? null).toBeNull();
      expect(list.tail?.next ?? null).toBeNull();
      expect(list.tail?.prev ?? null).toBeNull();
    });

    it("should return null if current is null", () => {
      const list = new DoublyLinkedList();
      list.add(1);
      list.add(2);
      list.add(3);
      list.removeAt(3);
      expect(list.size).toBe(3);
      expect(list.head?.value).toBe(1);
      expect(list.tail?.value).toBe(3);

      expect(list.head?.next?.value).toBe(2);
      expect(list.head?.prev).toBeNull();
      expect(list.tail?.next).toBeNull();
      expect(list.tail?.prev?.value).toBe(2);
    });

    it("should return null if current?.value is undefined", () => {
      const list = new DoublyLinkedList();
      list.add(1);
      list.add(2);
      list.add(3);
      list.head = null;
      expect(list.removeAt(1)).toBeNull();
    });
  });

  describe("RemoveFirst", () => {
    it("should remove the first node", () => {
      const list = new DoublyLinkedList();
      list.add(1);
      list.add(2);
      list.add(3);
      list.removeFirst();
      expect(list.size).toBe(2);
      expect(list.head?.value).toBe(2);
      expect(list.tail?.value).toBe(3);

      expect(list.head?.next?.value).toBe(3);
      expect(list.head?.prev ?? null).toBeNull();
      expect(list.tail?.next ?? null).toBeNull();
      expect(list.tail?.prev?.value).toBe(2);
    });

    it("should remove the first node", () => {
      const list = new DoublyLinkedList();
      list.add(1);
      list.removeFirst();
      expect(list.size).toBe(0);
      expect(list.head).toBeNull();
      expect(list.tail).toBeNull();

      expect(list.head?.next ?? null).toBeNull();
      expect(list.head?.prev ?? null).toBeNull();
      expect(list.tail?.next ?? null).toBeNull();
      expect(list.tail?.prev ?? null).toBeNull();
    });

    it("should return null if this.head?.value is undefined", () => {
      const list = new DoublyLinkedList();
      list.add(1);
      list.add(2);
      list.add(3);
      list.head = null;
      expect(list.removeFirst()).toBeNull();
    });
  });

  describe("RemoveLast", () => {
    it("should return null if the list is empty", () => {
      const list = new DoublyLinkedList();
      expect(list.removeLast()).toBeNull();
    });

    it("should remove the last node", () => {
      const list = new DoublyLinkedList();
      list.add(1);
      list.add(2);
      list.add(3);
      list.removeLast();
      expect(list.size).toBe(2);
      expect(list.head?.value).toBe(1);
      expect(list.tail?.value).toBe(2);

      expect(list.head?.next?.value).toBe(2);
      expect(list.head?.prev ?? null).toBeNull();
      expect(list.tail?.next ?? null).toBeNull();
      expect(list.tail?.prev?.value).toBe(1);
    });

    it("should remove the last node", () => {
      const list = new DoublyLinkedList();
      list.add(1);
      list.removeLast();
      expect(list.size).toBe(0);
      expect(list.head).toBeNull();
      expect(list.tail).toBeNull();

      expect(list.head?.next ?? null).toBeNull();
      expect(list.head?.prev ?? null).toBeNull();
      expect(list.tail?.next ?? null).toBeNull();
      expect(list.tail?.prev ?? null).toBeNull();
    });

    it("should return null if this.tail?.value is undefined", () => {
      const list = new DoublyLinkedList();
      list.add(1);
      list.add(2);
      list.add(3);
      list.tail = null;
      expect(list.removeLast()).toBeNull();
    });
  });

  describe("Contains", () => {
    it("should return true if the list contains the value", () => {
      const list = new DoublyLinkedList();
      list.add(1);
      list.add(2);
      list.add(3);
      expect(list.contains(2)).toBe(true);
    });

    it("should return false if the list does not contain the value", () => {
      const list = new DoublyLinkedList();
      list.add(1);
      list.add(2);
      list.add(3);
      expect(list.contains(4)).toBe(false);
    });
  });

  describe("Clear", () => {
    it("should clear the list", () => {
      const list = new DoublyLinkedList();
      list.add(1);
      list.add(2);
      list.add(3);
      expect(list.size).toBe(3);

      list.clear();

      expect(list.head).toBeNull();
      expect(list.tail).toBeNull();

      expect(list.head?.next ?? null).toBeNull();
      expect(list.head?.prev ?? null).toBeNull();
      expect(list.tail?.next ?? null).toBeNull();
      expect(list.tail?.prev ?? null).toBeNull();
    });
  });

  describe("Peek", () => {
    it("should return the first value", () => {
      const list = new DoublyLinkedList();
      list.add(1);
      list.add(2);
      list.add(3);
      expect(list.peek()).toBe(1);
    });

    it("should return null if the list is empty", () => {
      const list = new DoublyLinkedList();
      expect(list.peek()).toBeNull();
    });
  });

  describe("Get", () => {
    it("should return the value at a given index", () => {
      const list = new DoublyLinkedList();
      list.add(1);
      list.add(2);
      list.add(3);
      expect(list.get(1)).toBe(2);
    });

    it("should return null if the index is out of bounds", () => {
      const list = new DoublyLinkedList();
      list.add(1);
      list.add(2);
      list.add(3);
      expect(list.get(3)).toBeNull();
    });

    it("should return null if current?.value is undefined", () => {
      const list = new DoublyLinkedList();
      list.add(1);
      list.add(2);
      list.add(3);
      list.head = null;
      expect(list.get(1)).toBeNull();
    });
  });

  describe("GetFirst", () => {
    it("should return the first value", () => {
      const list = new DoublyLinkedList();
      list.add(1);
      list.add(2);
      list.add(3);
      expect(list.getFirst()).toBe(1);
    });

    it("should return null if the list is empty", () => {
      const list = new DoublyLinkedList();
      expect(list.getFirst()).toBeNull();
    });
  });

  describe("GetLast", () => {
    it("should return the last value", () => {
      const list = new DoublyLinkedList();
      list.add(1);
      list.add(2);
      list.add(3);
      expect(list.getLast()).toBe(3);
    });

    it("should return null if the list is empty", () => {
      const list = new DoublyLinkedList();
      expect(list.getLast()).toBeNull();
    });
  });

  describe("IndexOf", () => {
    it("should return the index of the value", () => {
      const list = new DoublyLinkedList();
      list.add(1);
      list.add(2);
      list.add(3);
      expect(list.indexOf(2)).toBe(1);
    });

    it("should return -1 if the value is not found", () => {
      const list = new DoublyLinkedList();
      list.add(1);
      list.add(2);
      list.add(3);
      expect(list.indexOf(4)).toBe(-1);
    });
  });

  describe("Iterator", () => {
    it("should iterate over the list", () => {
      const list = new DoublyLinkedList();
      list.add(1);
      list.add(2);
      list.add(3);

      const iterator = list.iterator();
      expect(iterator.next().value).toBe(1);
      expect(iterator.next().value).toBe(2);
      expect(iterator.next().value).toBe(3);
      expect(iterator.next().done).toBe(true);
    });

    it("should return done true if the list is empty", () => {
      const list = new DoublyLinkedList();
      const iterator = list.iterator();
      expect(iterator.next().done).toBe(true);
    });

    it("should be iterable with for...of loop", () => {
      const list = new DoublyLinkedList();
      list.add(1);
      list.add(2);
      list.add(3);

      const values = [];
      for (const value of list.iterator()) {
        values.push(value);
      }

      expect(values).toEqual([1, 2, 3]);
    });
  });

  describe("ToArray", () => {
    it("should return an array of values", () => {
      const list = new DoublyLinkedList();
      list.add(1);
      list.add(2);
      list.add(3);
      expect(list.toArray()).toEqual([1, 2, 3]);

      expect(list.head?.value).toBe(1);
      expect(list.head?.next?.value).toBe(2);
      expect(list.head?.prev).toBeNull();
      expect(list.tail?.value).toBe(3);
      expect(list.tail?.next).toBeNull();
      expect(list.tail?.prev?.value).toBe(2);
    });

    it("should return an empty array if the list is empty", () => {
      const list = new DoublyLinkedList();
      expect(list.toArray()).toEqual([]);
    });
  });

  describe("Poll", () => {
    it("should remove and return the first value", () => {
      const list = new DoublyLinkedList();
      list.add(1);
      list.add(2);
      list.add(3);
      expect(list.poll()).toBe(1);
      expect(list.size).toBe(2);
      expect(list.head?.value).toBe(2);

      expect(list.head?.next?.value).toBe(3);
      expect(list.head?.prev).toBeNull();
      expect(list.tail?.next).toBeNull();
      expect(list.tail?.prev?.value).toBe(2);
    });

    it("should return null if the list is empty", () => {
      const list = new DoublyLinkedList();
      expect(list.poll()).toBeNull();
    });
  });
});
