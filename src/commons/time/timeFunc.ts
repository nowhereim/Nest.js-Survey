export class timestuuf {
  constructor() {
    console.log(this.getNowDate());
  }

  getNowDate = () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();
    const millisecond = date.getMilliseconds();
    const nowDate = `${year}년${month}월${day}일${hour}시${minute}분${second}초${millisecond}`;
    return nowDate;
  };
}
