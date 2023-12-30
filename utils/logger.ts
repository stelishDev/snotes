/* eslint-disable no-console */

class Logger {
  constructor(private name: string) {}

  public debug(message: string, ...args: unknown[]): void {
    console.debug(`[${this.name}] ${message}`, ...args);
  }

  public info(message: string, ...args: unknown[]): void {
    console.info(`[${this.name}] ${message}`, ...args);
  }

  public warn(message: string): void {
    console.warn(`[${this.name}] ${message}`);
  }

  public error(message: string, ...args: unknown[]): void {
    console.error(`[${this.name}] ${message}`, ...args);
  }
}

export const logger = (name: string): Logger => {
  return new Logger(name);
};
