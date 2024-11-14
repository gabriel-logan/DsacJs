# Logger

The logger is a simple logging utility that can be used to log messages to the console. It is a simple wrapper around the `console.log` function that provides a few additional features such as the ability to log messages at different levels of severity and to enable or disable logging based on the current log level.

## Class

- `Logger(prefix)` - creates a new logger with the specified prefix.

## Methods

- `debug(info)` - logs info at the `DEBUG` level.
- `error(info)` - logs info at the `ERROR` level.
- `group(info)` - logs info at the `GROUP` level.
- `groupEnd(info)` - logs info at the `GROUP_END` level.
- `log(info)` - logs info at the `LOG` level.
- `trace(info)` - logs info at the `TRACE` level.
- `verbose(info)` - logs info at the `VERBOSE` level.
- `warn(info)` - logs info at the `WARN` level.

## Usage

```js
import { Logger } from "dsacjs";

const logger = new Logger();

logger.log("This is a log message");
logger.error("This is an error message");
logger.warn("This is a warning message");
logger.debug("This is a debug message");
logger.trace("This is a trace message");
logger.group("This is a group message");
logger.groupEnd("This is a group end message");
logger.verbose("This is a verbose message");
```

## Usage Class

```js
import { Logger } from "dsacjs";

class MyClass {
    private readonly logger = new Logger(MyClass.name);

    public myMethod() {
        this.logger.log("This is a log message");
        this.logger.error("This is an error message");
        this.logger.warn("This is a warning message");
        this.logger.debug("This is a debug message");
        this.logger.trace("This is a trace message");
        this.logger.group("This is a group message");
        this.logger.groupEnd("This is a group end message");
        this.logger.verbose("This is a verbose message");
    }
}
```
