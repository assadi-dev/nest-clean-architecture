import { container } from 'tsyringe';
import './type-orm/type-orm-injectior';
import Logger from 'src/domain/port/logger/logger.port';
import WinstonLogger from './winston-logger/winston-logger.adapter';

container.register<Logger>('Logger', {
  useValue: new WinstonLogger('info'),
});
