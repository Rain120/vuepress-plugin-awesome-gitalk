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
  // 是否开启首页评论
  home: false,
  // 关闭 Gitalk 评论页面, 正则匹配, eg: /docs/
  ignorePaths: ['/'],
  // gitalk 配置
  gitalk: {
    language: "zh-CN"
  }
};
