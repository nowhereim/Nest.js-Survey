import { HttpException, ExceptionFilter, Catch } from '@nestjs/common';
import { utilities } from 'nest-winston';
import * as winston from 'winston';
import 'winston-daily-rotate-file';
const logDir = __dirname + '/../../logs';

const level = process.env.NODE_ENV === 'production' ? 'error' : 'silly';
const format = winston.format.combine(
  winston.format.timestamp(),
  utilities.format.nestLike('Exception', { prettyPrint: true }),
);

const logger = winston.createLogger({
  level: level,
  format: format,
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({
      dirname: logDir + `/error`,
      filename: 'Exception.log',
      level: 'info',
      format: format,
    }),
  ],
});

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException) {
    const status = exception.getStatus();
    const message = exception.message;
    logger.log('error', '예외가 발생했습니다.');
    logger.log('error', '예외코드:' + status);
    logger.log('error', '예외내용:' + message);
  }
}
