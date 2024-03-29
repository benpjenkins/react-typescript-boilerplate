module.exports =  {
  "env": {
    "node": true,
    "jest": true,
    "browser": true
  },
  "parser": "@typescript-eslint/parser",
  "extends": [
    "airbnb-typescript",
    "plugin:prettier/recommended"
  ],
  "plugins": [
    "@typescript-eslint",
    "react",
    "react-hooks"
  ],
  "rules": {
    "react/prop-types": 0,
    "import/no-extraneous-dependencies": ["error", {"devDependencies": true}],
    "import/prefer-default-export": 0,
    "linebreak-style": ["error", (process.platform === "win32" ? "windows" : "unix")],
    "import/prefer-default-export": 0,
    "react/jsx-one-expression-per-line": 0,
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn"
  }
};
