class EnvTools {
  env() {
    return process.env.NODE_ENV;
  }

  /** 是否是测试环境 */
  isDev() {
    return process.env.NODE_ENV === "development";
  }

  /** 是否是正式环境 */
  isProd() {
    return process.env.NODE_ENV === "production";
  }
}

export const envTools = new EnvTools();
