const path = require('path')
const defaultsDeep = require('lodash.defaultsdeep');
const defaultPluginConfig = require('./utils/default-plugin-config');

module.exports = (options = {}, context) => ({
  name: defaultPluginConfig.pluginName,

  /*
   * ready 钩子在应用初始化之后，并在某些特定的函数式 API 执行之前执行。
   * https://vuepress.vuejs.org/zh/plugin/life-cycle.html#ready
   */
  async ready() {
    options = defaultsDeep({}, options, defaultPluginConfig);
  },

  /*
   * https://vuepress.vuejs.org/zh/plugin/option-api.html#define
   */
  define() {
    if (options.log && options.enable) {
      console.log("Loading" + options.pluginName + "Plugin Config: " + JSON.stringify(options));
    }
    return {
      pluginConfig: JSON.stringify(options)
    };
  },

  /*
   * 指向 mixin 文件的路径，它让你可以控制根组件的生命周期
   * https://vuepress.vuejs.org/zh/plugin/option-api.html#clientrootmixin
   */
  clientRootMixin: path.resolve(__dirname, 'utils/', 'clientRootMixin.js'),

  /*
   * 全局 UI Vue 组件
   * https://vuepress.vuejs.org/zh/plugin/option-api.html#globaluicomponents
   */
  globalUIComponents: ['Gitalk'],

  /*
   * 指向增强文件的绝对文件路径或返回该路径的函数
   * https://vuepress.vuejs.org/zh/plugin/option-api.html#enhanceappfiles
   */
  enhanceAppFiles: [
    path.resolve(__dirname, 'utils/', 'enhanceAppFile.js')
  ],

  /*
   * 在生产环境的构建结束后被调用，生成的页面的路径数组将作为该函数的第一个参数
   * https://vuepress.vuejs.org/zh/plugin/life-cycle.html#generated
   */
  async generated(pagePaths) {},
});