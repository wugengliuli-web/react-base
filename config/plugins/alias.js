const path = require("path");

/** 配置快捷路径 */
const alias = {
  "@": path.resolve(__dirname, "../../src"),
  "@utils": path.resolve(__dirname, "../../src/utils"),
  "@pages": path.resolve(__dirname, "../../src/pages"),
  "@track": path.resolve(__dirname, "../../src/js-bridge/index.js"),
  "@style": path.resolve(__dirname, "../../src/styles"),
  "@globals": path.resolve(__dirname, "../../src/globals"),
  "@hooks": path.resolve(__dirname, "../../src/hooks"),
  "@components": path.resolve(__dirname, "../../src/components"),
};

module.exports = alias;
