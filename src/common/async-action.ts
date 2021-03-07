import { observable, runInAction } from "mobx";
export function createActionAction(
  asyncAction: (...params: any[]) => Promise<any>
) {
  return function (...params: any[]) {
    const extraAction = async function () {
      const extra = extraAction.extra;
      runInAction(() => {
        extra.loading = true;
        extra.err = null;
      });

      let error: any = null;
      let data;

      try {
        data = await asyncAction(...params);
      } catch (err) {
        error = err;
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
