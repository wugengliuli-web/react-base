class BridgeManager {
  reportError() {}

  loadImageStart() {}

  loadImageSuccess() {}

  loadImageFail() {}

  /** 进入页面 */
  pageEnter() {}

  /** 离开页面 */
  pageLeave() {}

  /** 开始请求 */
  requestStart() {}

  /** 请求成功 */
  requestSuccess() {}

  /** 请求失败 */
  requestFail() {}
}

export const track = new BridgeManager();
