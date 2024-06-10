import Logger from 'src/domain/port/logger/logger.port';
import winston, { format, transports } from 'winston';

export type LogLevel = 'error' | 'warn' | 'info' | 'debug';

export default class WinstonLogger implements Logger {
  private logger: winston.Logger;

  constructor(logLevel: LogLevel) {
    this.logger = winston.createLogger({
      level: logLevel,
      format: format.combine(
        format.colorize(),
        format.timestamp(),
        format.printf((info) => {
          return `[${info.timestamp}] ${info.level}: ${info.message}`;
        }),
      ),
      transports: [new transports.Console()],
    });
  }

  info(message: string): void {
    this.logger.info(message);
  }
  warn(message: string): void {
    this.logger.warn(message);
  }
  error(message: string): void {
    this.logger.error(message);
  }
  debug(message: string): void {
    this.logger.debug(message);
  }
}
