/* eslint-disable no-console */

export default class Logger {
  private readonly prefix: string | undefined;

  constructor(prefix?: string) {
    this.prefix = prefix;
  }

  log(data: any): void {
    if (this.prefix) {
      console.log(`[${this.prefix}] ${data}`);
    } else {
      console.log(data);
    }
  }

  error(data: any): void {
    if (this.prefix) {
      console.error(`[${this.prefix}] ${data}`);
    } else {
      console.error(data);
    }
  }

  warn(data: any): void {
    if (this.prefix) {
      console.warn(`[${this.prefix}] ${data}`);
    } else {
      console.warn(data);
    }
  }

  info(data: any): void {
    if (this.prefix) {
      console.info(`[${this.prefix}] ${data}`);
    } else {
      console.info(data);
    }
  }

  debug(data: any): void {
    if (this.prefix) {
      console.debug(`[${this.prefix}] ${data}`);
    } else {
      console.debug(data);
    }
  }

  trace(data: any): void {
    if (this.prefix) {
      console.trace(`[${this.prefix}] ${data}`);
    } else {
      console.trace(data);
    }
  }

  group(data: any): void {
    if (this.prefix) {
      console.group(`[${this.prefix}] ${data}`);
    } else {
      console.group(data);
    }
  }

  groupEnd(): void {
    console.groupEnd();
  }

  verbose(data: any): void {
    if (this.prefix) {
      console.log(`[VERBOSE] [${this.prefix}] ${data}`);
    } else {
      console.log(`[VERBOSE] ${data}`);
    }
  }
}
