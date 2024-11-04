/* eslint-disable no-console */

export default class Logger {
  private readonly prefix: string | undefined;

  constructor(prefix?: string) {
    this.prefix = prefix;
  }

  log(message: string): void {
    if (this.prefix) {
      console.log(`[${this.prefix}] ${message}`);
    } else {
      console.log(message);
    }
  }

  error(message: string): void {
    if (this.prefix) {
      console.error(`[${this.prefix}] ${message}`);
    } else {
      console.error(message);
    }
  }

  warn(message: string): void {
    if (this.prefix) {
      console.warn(`[${this.prefix}] ${message}`);
    } else {
      console.warn(message);
    }
  }

  info(message: string): void {
    if (this.prefix) {
      console.info(`[${this.prefix}] ${message}`);
    } else {
      console.info(message);
    }
  }

  debug(message: string): void {
    if (this.prefix) {
      console.debug(`[${this.prefix}] ${message}`);
    } else {
      console.debug(message);
    }
  }

  trace(message: string): void {
    if (this.prefix) {
      console.trace(`[${this.prefix}] ${message}`);
    } else {
      console.trace(message);
    }
  }

  group(message: string): void {
    if (this.prefix) {
      console.group(`[${this.prefix}] ${message}`);
    } else {
      console.group(message);
    }
  }

  groupEnd(): void {
    console.groupEnd();
  }

  verbose(message: string): void {
    if (this.prefix) {
      console.log(`[VERBOSE] [${this.prefix}] ${message}`);
    } else {
      console.log(`[VERBOSE] ${message}`);
    }
  }
}
