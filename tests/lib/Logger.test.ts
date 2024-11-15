import Logger from "../../src/lib/Logger";

describe("Logger", () => {
  describe("log", () => {
    it("should log a message without prefix", () => {
      const logger = new Logger();

      const spyConsoleLog = jest
        .spyOn(console, "log")
        .mockImplementation(() => {});

      logger.log("Hello, World!");

      expect(logger.log).toBeInstanceOf(Function);
      expect(spyConsoleLog).toHaveBeenCalledWith("[LOG] Hello, World!");
    });

    it("should log a message with prefix", () => {
      const logger = new Logger("Log");

      const spyConsoleLog = jest
        .spyOn(console, "log")
        .mockImplementation(() => {});

      logger.log("Hello, World!");

      expect(logger.log).toBeInstanceOf(Function);
      expect(spyConsoleLog).toHaveBeenCalledWith("[LOG] [Log] Hello, World!");
    });
  });

  describe("error", () => {
    it("should log an error without prefix", () => {
      const logger = new Logger();

      const spyConsoleError = jest
        .spyOn(console, "error")
        .mockImplementation(() => {});

      logger.error("Hello, World!");

      expect(logger.error).toBeInstanceOf(Function);
      expect(spyConsoleError).toHaveBeenCalledWith("[ERROR] Hello, World!");
    });

    it("should log an error with prefix", () => {
      const logger = new Logger("Error");

      const spyConsoleError = jest
        .spyOn(console, "error")
        .mockImplementation(() => {});

      logger.error("Hello, World!");

      expect(logger.error).toBeInstanceOf(Function);
      expect(spyConsoleError).toHaveBeenCalledWith(
        "[ERROR] [Error] Hello, World!",
      );
    });
  });

  describe("warn", () => {
    it("should log a warning without prefix", () => {
      const logger = new Logger();

      const spyConsoleWarn = jest
        .spyOn(console, "warn")
        .mockImplementation(() => {});

      logger.warn("Hello, World!");

      expect(logger.warn).toBeInstanceOf(Function);
      expect(spyConsoleWarn).toHaveBeenCalledWith("[WARN] Hello, World!");
    });

    it("should log a warning with prefix", () => {
      const logger = new Logger("Warn");

      const spyConsoleWarn = jest
        .spyOn(console, "warn")
        .mockImplementation(() => {});

      logger.warn("Hello, World!");

      expect(logger.warn).toBeInstanceOf(Function);
      expect(spyConsoleWarn).toHaveBeenCalledWith(
        "[WARN] [Warn] Hello, World!",
      );
    });
  });

  describe("info", () => {
    it("should log an info message without prefix", () => {
      const logger = new Logger();

      const spyConsoleInfo = jest
        .spyOn(console, "info")
        .mockImplementation(() => {});

      logger.info("Hello, World!");

      expect(logger.info).toBeInstanceOf(Function);
      expect(spyConsoleInfo).toHaveBeenCalledWith("[INFO] Hello, World!");
    });

    it("should log an info message with prefix", () => {
      const logger = new Logger("Info");

      const spyConsoleInfo = jest
        .spyOn(console, "info")
        .mockImplementation(() => {});

      logger.info("Hello, World!");

      expect(logger.info).toBeInstanceOf(Function);
      expect(spyConsoleInfo).toHaveBeenCalledWith(
        "[INFO] [Info] Hello, World!",
      );
    });
  });

  describe("debug", () => {
    it("should log a debug message without prefix", () => {
      const logger = new Logger();

      const spyConsoleDebug = jest
        .spyOn(console, "debug")
        .mockImplementation(() => {});

      logger.debug("Hello, World!");

      expect(logger.debug).toBeInstanceOf(Function);
      expect(spyConsoleDebug).toHaveBeenCalledWith("[DEBUG] Hello, World!");
    });

    it("should log a debug message with prefix", () => {
      const logger = new Logger("Debug");

      const spyConsoleDebug = jest
        .spyOn(console, "debug")
        .mockImplementation(() => {});

      logger.debug("Hello, World!");

      expect(logger.debug).toBeInstanceOf(Function);
      expect(spyConsoleDebug).toHaveBeenCalledWith(
        "[DEBUG] [Debug] Hello, World!",
      );
    });
  });

  describe("trace", () => {
    it("should log a trace message without prefix", () => {
      const logger = new Logger();

      const spyConsoleTrace = jest
        .spyOn(console, "trace")
        .mockImplementation(() => {});

      logger.trace("Hello, World!");

      expect(logger.trace).toBeInstanceOf(Function);
      expect(spyConsoleTrace).toHaveBeenCalledWith("[TRACE] Hello, World!");
    });

    it("should log a trace message with prefix", () => {
      const logger = new Logger("Trace");

      const spyConsoleTrace = jest
        .spyOn(console, "trace")
        .mockImplementation(() => {});

      logger.trace("Hello, World!");

      expect(logger.trace).toBeInstanceOf(Function);
      expect(spyConsoleTrace).toHaveBeenCalledWith(
        "[TRACE] [Trace] Hello, World!",
      );
    });
  });

  describe("group", () => {
    it("should log a group message without prefix", () => {
      const logger = new Logger();

      const spyConsoleGroup = jest
        .spyOn(console, "group")
        .mockImplementation(() => {});

      logger.group("Hello, World!");

      expect(logger.group).toBeInstanceOf(Function);
      expect(spyConsoleGroup).toHaveBeenCalledWith("[GROUP] Hello, World!");
    });

    it("should log a group message with prefix", () => {
      const logger = new Logger("Group");

      const spyConsoleGroup = jest
        .spyOn(console, "group")
        .mockImplementation(() => {});

      logger.group("Hello, World!");

      expect(logger.group).toBeInstanceOf(Function);
      expect(spyConsoleGroup).toHaveBeenCalledWith(
        "[GROUP] [Group] Hello, World!",
      );
    });
  });

  describe("groupEnd", () => {
    it("should log a group end message", () => {
      const logger = new Logger();

      const spyConsoleGroupEnd = jest
        .spyOn(console, "groupEnd")
        .mockImplementation(() => {});

      logger.groupEnd();

      expect(logger.groupEnd).toBeInstanceOf(Function);
      expect(spyConsoleGroupEnd).toHaveBeenCalled();
    });
  });

  describe("verbose", () => {
    it("should log a verbose message without prefix", () => {
      const logger = new Logger();

      const spyConsoleLog = jest
        .spyOn(console, "log")
        .mockImplementation(() => {});

      logger.verbose("Hello, World!");

      expect(logger.verbose).toBeInstanceOf(Function);
      expect(spyConsoleLog).toHaveBeenCalledWith("[VERBOSE] Hello, World!");
    });

    it("should log a verbose message with prefix", () => {
      const logger = new Logger("Verbose");

      const spyConsoleLog = jest
        .spyOn(console, "log")
        .mockImplementation(() => {});

      logger.verbose("Hello, World!");

      expect(logger.verbose).toBeInstanceOf(Function);
      expect(spyConsoleLog).toHaveBeenCalledWith(
        "[VERBOSE] [Verbose] Hello, World!",
      );
    });
  });
});
