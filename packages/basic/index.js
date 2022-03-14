module.exports = {
  env: {
    es6: true, // 支持除模块外所有 ECMAScript 6 特性（该选项会自动设置 ecmaVersion 解析器选项为 6）。
    browser: true, // 浏览器的全局变量
    node: true // Node.js 全局变量和 Node.js 作用域
  },
  extends: [
    "standard"
  ],
  ignorePatterns: [
    "*.min.*"
  ],
  rules: {
    // common
    quotes: ["error", "double"]
  }
}
