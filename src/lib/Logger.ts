/* eslint-disable no-console */

export default class Logger {
  private readonly prefix: string | undefined;

  private readonly colors = {
    log: "\x1b[32m", // Green
    error: "\x1b[31m", // Red
    warn: "\x1b[33m", // Yellow
    info: "\x1b[34m", // Blue
    debug: "\x1b[35m", // Magenta
    reset: "\x1b[0m", // Reset
  };

  constructor(prefix?: string) {
    this.prefix = prefix;
  }

  public log(data: any): void {
    if (this.prefix) {
      console.log(`[LOG] [${this.prefix}] ${data}`);
    } else {
      console.log(`[LOG] ${data}`);
    }
  }

  public error(data: any): void {
    if (this.prefix) {
      console.error(`[ERROR] [${this.prefix}] ${data}`);
    } else {
      console.error(`[ERROR] ${data}`);
    }
  }

  public warn(data: any): void {
    if (this.prefix) {
      console.warn(`[WARN] [${this.prefix}] ${data}`);
    } else {
      console.warn(`[WARN] ${data}`);
    }
  }

  public info(data: any): void {
    if (this.prefix) {
      console.info(`[INFO] [${this.prefix}] ${data}`);
    } else {
      console.info(`[INFO] ${data}`);
    }
  }

  public debug(data: any): void {
    if (this.prefix) {
      console.debug(`[DEBUG] [${this.prefix}] ${data}`);
    } else {
      console.debug(`[DEBUG] ${data}`);
    }
  }

  public trace(data: any): void {
    if (this.prefix) {
      console.trace(`[TRACE] [${this.prefix}] ${data}`);
    } else {
      console.trace(`[TRACE] ${data}`);
    }
  }

  public group(data: any): void {
    if (this.prefix) {
      console.group(`[GROUP] [${this.prefix}] ${data}`);
    } else {
      console.group(`[GROUP] ${data}`);
    }
  }

  public groupEnd(): void {
    console.groupEnd();
  }

  public verbose(data: any): void {
    if (this.prefix) {
      console.log(`[VERBOSE] [${this.prefix}] ${data}`);
    } else {
      console.log(`[VERBOSE] ${data}`);
    }
  }
}
