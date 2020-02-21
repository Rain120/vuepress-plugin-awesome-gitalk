import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import vue from 'rollup-plugin-vue'
import babel from 'rollup-plugin-babel'

export default {
  input: "src/index.js",
  output: {
    name: "vuepress-plugin-awesome-gitalk",
    file: "lib/vuepress-plugin-awesome-gitalk.js",
    format: "umd"
  },
  plugins: [
    resolve({
      extensions: ['.vue'],
    }),
    commonjs(),
    vue(),
    babel({
      exclude: 'node_modules/**',
      runtimeHelpers: true,
    }),
  ]
};
