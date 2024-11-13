# Logger

The logger is a simple logging utility that can be used to log messages to the console. It is a simple wrapper around the `console.log` function that provides a few additional features such as the ability to log messages at different levels of severity and to enable or disable logging based on the current log level.

## Usage

```js
import { Logger } from "dsacjs";

const logger = new Logger("MyLogger");

logger.log("This is a log message");

logger.info("This is an info message");

logger.warn("This is a warning message");

logger.error("This is an error message");
```
