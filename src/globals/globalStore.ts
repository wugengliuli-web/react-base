import { observable, action, configure } from "mobx";

// 不允许直接改动数据，必须通过action
configure({ enforceActions: "observed" });

/** 基础数据存储 */
export class GlobalStore {
  @observable
  userInfo = {
    name: "小明",
  };

  @observable
  name = "123";

  @action
  changeUserName = () => {
    this.userInfo.name = "小花";

    this.name = "789";
    console.log("发生了改变");
  };
}
