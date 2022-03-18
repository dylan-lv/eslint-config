module.exports = {
  env: {
    es6: true, // 支持除模块外所有 ECMAScript 6 特性（该选项会自动设置 ecmaVersion 解析器选项为 6）。
    browser: true, // 浏览器的全局变量
    node: true, // Node.js 全局变量和 Node.js 作用域
  },
  extends: [
    "standard",
    "plugin:import/recommended",
    "plugin:eslint-comments/recommended",
  ],
  ignorePatterns: [
    "*.min.*",
    "dist",
    "public",
    "packages-lock.json",
    "pnpm-lock.yaml",
    "yarn.lock",
    "!.github",
    "!.vitepress",
    "!.vscode",
  ],
  settings: {
    'import/resolver': {
      node: { extensions: ['.js', '.mjs', '.ts', '.d.ts'] },
    },
  },
  overrides: [
    {
      files: ['*.d.ts'],
      rules: {
        'import/no-duplicates': 'off',
      },
    },
    {
      files: ['*.js'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
  ],
  rules: {
    // import
    "import/no-unresolved": "off",
    "import/named": "off",

    // common
    semi: [2, "always"], // 结尾始终分号
    quotes: ["error", "double"], // 双引号
    "no-unused-vars": "warn",
    "comma-dangle": ["error", "always-multiline"], // 当最后一个元素或属性与闭括号 ] 或 } 在 不同的行时，要求使用拖尾逗号；当在 同一行时，禁止使用拖尾逗号。
    "space-before-function-paren": [2, "never"] // 函数左括号前不能有空格
  },
}
