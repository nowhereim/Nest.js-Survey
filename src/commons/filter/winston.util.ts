import { utilities, WinstonModule } from 'nest-winston';
import * as winstonDaily from 'winston-daily-rotate-file';
import * as winston from 'winston';
const logDir = __dirname + '/../../logs'; // log 파일을 관리할 폴더

const dailyOptions = (level: string) => {
  return {
    level,
    datePattern: 'YYYY-MM-DD',
    dirname: logDir + `/${level}`,
    filename: level === 'error' ? 'error.log' : `%DATE%.${level}.log`,
    maxFiles: 30,
    zippedArchive: true,
  };
};
export const winstonLogger = WinstonModule.createLogger({
  transports: [
    new winston.transports.Console({
      level: 'silly',
      format: winston.format.combine(
        winston.format.timestamp(),
        utilities.format.nestLike('안태환 입니다. 잘부탁드립니다!', {
          prettyPrint: true,
          colors: true,
        }),
      ),
    }),

    // info, warn, error 로그는 파일로 관리
    new winstonDaily(dailyOptions('info')),
    new winstonDaily(dailyOptions('warn')),
    new winstonDaily(dailyOptions('error')),
  ],
});
