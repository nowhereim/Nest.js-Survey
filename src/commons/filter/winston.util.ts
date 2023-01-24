import { utilities, WinstonModule } from 'nest-winston';
import * as winstonDaily from 'winston-daily-rotate-file';
import * as winston from 'winston';
const logDir = __dirname + '/../../logs'; // log 파일을 관리할 폴더

// const dailyOptions = (level: string) => {
//   return {
//     level,
//     datePattern: 'YYYY-MM-DD',
//     dirname: logDir + `/${level}`,
//     filename: `%DATE%.${level}.log`,
//     maxFiles: 30, //30일치 로그파일 저장
//     zippedArchive: true, // 로그가 쌓이면 압축하여 관리
//   };
// };

const dailyOptions = (level: string) => {
  return {
    level,
    datePattern: 'YYYY-MM-DD',
    dirname: logDir + `/${level}`,
    // changed filename to error.log
    filename: level === 'error' ? 'error.log' : `%DATE%.${level}.log`,
    maxFiles: 30,
    zippedArchive: true,
  };
};

// rfc5424를 따르는 winston만의 log level
// error: 0, warn: 1, info: 2, http: 3, verbose: 4, debug: 5, silly: 6
export const winstonLogger = WinstonModule.createLogger({
  transports: [
    new winston.transports.Console({
      level: 'silly',
      // production 환경이라면 http, 개발환경이라면 모든 단계를 로그
      format: winston.format.combine(
        winston.format.timestamp(),
        utilities.format.nestLike('안태환 입니다. 잘부탁드립니다!', {
          prettyPrint: true, // nest에서 제공하는 옵션. 로그 가독성을 높여줌
          //색상을 넣어줌
          colors: true,
        }),
      ),
    }),

    // info, warn, error 로그는 파일로 관리
    new winstonDaily(dailyOptions('info')), // info 레벨 로그는 info 폴더에 저장
    new winstonDaily(dailyOptions('warn')), // warn 레벨 로그는 warn 폴더에 저장
    new winstonDaily(dailyOptions('error')), // error 레벨 로그는 error 폴더에 저장
  ],
});
