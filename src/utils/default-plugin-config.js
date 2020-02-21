const path = require("path");
const config = require(path.resolve(__dirname, "../../", "package.json"));

module.exports = {
  log: true,
  pluginName: config.name,
  enable: true,
  // 挂载节点
  root: "gitalk-container",
  //最大重试次数
  maxRetryCount: 5,
  // 默认是检查时间
  defaultCheckMinutes: 500,
  home: true,
  // gitalk 配置
  gitalk: {
    language: "zh-CN"
  }
};
