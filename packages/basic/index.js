module.exports = {
  env: {
    es6: true,
    browser: true,
    node: true
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
