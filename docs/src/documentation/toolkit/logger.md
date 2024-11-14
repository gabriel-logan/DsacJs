# Logger

The logger is a simple logging utility that can be used to log messages to the console. It is a simple wrapper around the `console.log` function that provides a few additional features such as the ability to log messages at different levels of severity and to enable or disable logging based on the current log level.

## Methods

- `Logger(prefix)` - creates a new logger with the specified prefix.

- `log(info)` - logs a info at the `LOG` level.
- `error(info)` - logs a info at the `ERROR` level.
- `warn(info)` - logs a info at the `WARN` level.
- `debug(info)` - logs a info at the `DEBUG` level.
- `trace(info)` - logs a info at the `TRACE` level.
- `group(info)` - logs a info at the `GROUP` level.
- `groupEnd(info)` - logs a info at the `GROUP_END` level.
- `verbose(info)` - logs a info at the `VERBOSE` level.

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
