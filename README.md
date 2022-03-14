# @dylanlv/eslint-config


## Usage

### Install

```bash
pnpm add -D eslint @dylanlv/eslint-config
```

### Config `.eslintrc`

```js
module.exports = {
  extends: "@dylanlv/eslint-config"
}
```

### Add script for package.json

```json
{
  "scripts": {
    "lint": "eslint ."
  }
}
```

### Config VS Code auto fix

Create `.vscode/settings.json`

```json
{
  "prettier.enable": false,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```



