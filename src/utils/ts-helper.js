export class TSHelper {
  static createEnum(Obj = {}) {
    return (function (Obj) {
      for (const key in Obj) {
        const num = Number(Obj[key]);
        if (!Number.isNaN(num)) {
          // 如果转换为为数字
          Obj[(Obj[Obj[key]] = Obj[key])] = key;
        } else {
          Obj[key] = Obj[key];
        }
      }
      return Obj;
    })(Obj);
  }
}
