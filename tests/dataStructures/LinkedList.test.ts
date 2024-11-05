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

  describe("Prepend", () => {});

  describe("Append", () => {});

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

      expect(spyLogger).toHaveBeenCalledTimes(3);
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
