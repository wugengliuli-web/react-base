import { observable, runInAction } from "mobx";
import { track } from "@track";
export function createActionAction(asyncAction) {
  return function (...params) {
    const extraAction = async function () {
      // ? 监控请求的成功率和时间
      track.requestStart();

      const extra = extraAction.extra;
      runInAction(() => {
        extra.loading = true;
        extra.err = null;
      });

      let error = null;
      let data;

      try {
        data = await asyncAction(...params);
        track.requestSuccess();
      } catch (err) {
        error = err;
        track.requestFail();
      }

      runInAction(() => {
        extra.loading = false;
        extra.err = error;
      });

      return data;
    };

    extraAction.extra = observable.object({
      loading: false,
      err: null,
    });

    return extraAction;
  };
}
