const path = require("path");

/** 配置快捷路径 */
const alias = {
  "@": path.resolve(__dirname, "../../src"),
  "@utils": path.resolve(__dirname, "../../src/utils"),
  "@pages": path.resolve(__dirname, "../../src/pages"),
  "@bridge": path.resolve(__dirname, "../../src/js-bridge"),
  "@styles": path.resolve(__dirname, "../../src/styles"),
  "@globals": path.resolve(__dirname, "../../src/globals"),
  "@hooks": path.resolve(__dirname, "../../src/hooks"),
  "@components": path.resolve(__dirname, "../../src/components"),
  "@assets": path.resolve(__dirname, "../../src/assets"),
};

module.exports = alias;
